import React from 'react';
import ProyectoActions from '../actions/ProyectoActions';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import ProyectoStore from '../stores/ProyectoStore';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
  button: {
    margin: theme.spacing.unit,
  },
});

class AgregarElementoComponent extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			item: this.obtenerElementoVacio()//elemento capturado
		};
	}

	obtenerElementoVacio(){
		return{
			descripcion : '',
			precio: 0
		};
	}

	_actualizarEstado(event){
		let campo = event.target.name;
		let valor = event.target.value;
		if (valor && campo =='precio' && !valor.match(/^[a-z0-9.\+\-]+$/g)){
			return 
		} 
		this.state.item[campo]=valor;
		this.setState({item: this.state.item});
	
	}




	_addNewItem(event) {

		event.preventDefault();
		this.state.item.descripcion = this.state.item.descripcion || '-';
		this.state.item.precio = this.state.item.precio || '0';
		ProyectoActions.agregarElemento(this.state.item);
		console.log(this.state.item);
		this.setState({ item : this.obtenerElementoVacio() });
	}


	_remoto(event) {

			
			ProyectoActions.remoto();
			console.log(this.state.item);
			
	}

render() {
		const { classes } = this.props;

		return (
			<div>
		
				<h3 className="total">${ProyectoStore.getSuma()}</h3>
					<form id="myform" className="form-inline add-item" onSubmit={this._addNewItem.bind(this)}><br/>
				  		<TextField id="descripcion" label="Descripción" defaultValue={this.state.item.descripcion}  margin="normal" name="descripcion" onChange={this._actualizarEstado.bind(this)} value={this.state.value}/><br/>
                        <TextField id="precio" label="Precio"   margin="normal" name="precio" onChange={this._actualizarEstado.bind(this)} value={this.state.value}/>
						
					    <Button variant="contained" component="span" className={classes.button} onClick={this._addNewItem.bind(this)}>

					     
				          Add
				         
				        </Button>
				         <Button variant="contained" component="span" className={classes.button} onClick={this._remoto.bind(this)}>
				         	remoto
				         </Button>
					</form>
			}
			</div>
		)
	}
}

AgregarElementoComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AgregarElementoComponent);

	


