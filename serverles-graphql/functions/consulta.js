const {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLNonNull,
} = require('graphql');

const AWS = require('aws-sdk');

const dynamoDb = new AWS.DynamoDB.DocumentClient();

const promisify = foo => new Promise((resolve, reject) => {
  foo((error, result) => {
    if (error) {
      reject(error);
    } else {
      resolve(result);
    }
  });
});


var AlumnoType = new GraphQLObjectType({
    name: "alumno",
    fields: {
      matricula: { type: GraphQLString },
      nombre: { type: GraphQLString },
      apellido_materno: { type: GraphQLString }, 
      apellido_paterno: { type: GraphQLString },
      carrera: {type: GraphQLString}
      }
    });
 

const obtenerAlumno = matricula => promisify(callback =>
  dynamoDb.get({
    TableName: process.env.DYNAMODB_TABLE,
    Key: { matricula },
  }, callback))
  .then((result) => {
  
    return {
      "nombre": result.Item.nombre,
      "matricula": result.Item.matricula,
      "apellido_materno": result.Item.apellido_materno,
      "apellido_paterno": result.Item.apellido_paterno,
      "carrera":result.Item.carrera
    };
  });


  const obtenerAlumnoList = carrera => promisify(callback =>
  dynamoDb.scan({
    TableName: process.env.DYNAMODB_TABLE,
    FilterExpression: "#carrera = :carrera",
    ExpressionAttributeNames: {
        "#carrera": "carrera",
    },
    ExpressionAttributeValues: { ":carrera": carrera }

  }, callback))
  .then((result) => {
    return result.Items;
  });

  


const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType', // an arbitrary name
    fields: {
      alumno: {
        // we need to know the user's name to greet them
        args: { matricula: { name: 'matricula', type: new GraphQLNonNull(GraphQLString) } },
        type: AlumnoType,
        // resolve to a greeting message
        resolve: (parent, args) => obtenerAlumno(args.matricula)
      }
    }
  })
});

const schemaList = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryTypeList', // an arbitrary name
    fields: {
      alumnos: {
        args: { carrera: { name: 'carrera', type: new GraphQLNonNull(GraphQLString) } },
        type: new GraphQLList(AlumnoType),
      
        resolve: (parent, args) => obtenerAlumnoList(args.carrera)
      }
    }
  }),
});


module.exports.query = (event, context, callback) =>
  graphql(schema, event.queryStringParameters.query)
  .then(
    result => callback(null, { statusCode: 200, body: JSON.stringify(result) }),
    err => callback(err)
  );


module.exports.queryList = (event, context, callback) =>
  graphql(schemaList, event.queryStringParameters.query)
  .then(
    result => callback(null, { statusCode: 200, body: JSON.stringify(result) }),
    err => callback(err)
  );


