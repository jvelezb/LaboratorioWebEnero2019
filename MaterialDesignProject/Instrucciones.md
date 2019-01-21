Material Design 
====================

Prerequisitos
---------------------
Debes tener un IDE de HTML de tu preferencia, como lo es:

*   WebStorm.
*   Sublime.
*   VisualStudio.

###Instalaciones previas

* NVM (Node Version Manager): si no haz instalado node sigue el siguiente link dependiente de tu plataforma:

   [NVM UNIX](https://github.com/creationix/nvm)  
   [NVM Windows](https://github.com/coreybutler/nvm-windows)
   
   

Pasos a seguir
--------------------
### Paso 1 - Crear proyecto en node

Ingresa el siguiente comando  
`npm init`
y seguir las instrucciones para establecer el proyecto.

ingresa el siguiente script 

```
{
  "scripts": {
    "start": "webpack-dev-server"
  }
}
```

se deberá instalar por medio del siguiente comando

`npm install --save-dev webpack@3 webpack-dev-server@2 css-loader sass-loader node-sass extract-loader file-loader

Agrega el siguiente HTML

``
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="estilos.css">
  </head>
  <body>Proyecto primera clase</body>
</html>
```

Genera una archivo `/estilos/app.scss` y agrega el siguiente código 
al archivo.
```
body {
  color: blue;
}
```

Genera el siguietne archivo `webpack.config.js`
```
module.exports = [{
  entry: './estilos/app.scss',
  output: {
    filename: 'style-bundle.js', //nombre forzoso
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'bundle.css',
            },
          },
          { loader: 'extract-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' },
        ]
      }
    ]
  },
}];
```



### Paso 2: Incluye CSS for a para un componente



`npm install --save-dev @material/button`

en el archivo `app.scss` agregar el siguiente estilo de scss

```
@import "@material/button/mdc-button";

.foo-button {
  @include mdc-button-ink-color(teal);
  @include mdc-states(teal);
}
```

agregar al `webpack.config.js` el siguiente código `{ loader: 'sass-loader' }`
```
{
  loader: 'sass-loader',
  options: {
    includePaths: ['./node_modules']
  }
}
```

instala el PostCSS

`npm install --save-dev autoprefixer postcss-loader`

y añade al inicio del archivo `webpack.config.js`  el siguiente texto

`const autoprefixer = require('autoprefixer');`

Agrega el  postcss-loader`, usando autoprefixer` como un plugin:

```
{
  loader: 'postcss-loader',
  options: {
     plugins: () => [autoprefixer()]
  }
},
```

Cambia tu index.html a 

```
<body>
  <button class="foo-button mdc-button">
    Bot&oacute;n 
  </button>
</body>
```


### Paso 3: Webpack with ES2015

Instalación de ES2015 o ES5

`npm install --save-dev babel-core@6 babel-loader@7 babel-preset-es2015 babel-plugin-transform-object-assign`






Videos de soporte
----------------------

* Revisa este video [Tutorial 1](https://www.youtube.com/watch?v=ofnf7dZS7ck).

* Revisa este video  [Tutorial 2](https://www.youtube.com/watch?v=lWHl0N8JJzE&t=23s).

* Video número 3 [Tutorial 3](https://www.youtube.com/watch?v=fqDtQs6CUNs).

