//ProyectoStore
import { EventEmitter } from 'events';
import  Dispatcher from '../dispatchers';

let listado = [];

class ProyectoStore extends EventEmitter{
			constructor(){
				super();
				Dispatcher.register(this._registerToActions.bind(this));// metodos
			}

			_registerToActions(action){
				switch(action.actionType){
					case 'ADD_NEW_ITEM':
						//llamar a funcion agregar elementos
						this.agregarElemento(action.payload);
						break;
					case 'INITIALISE':
						this.emit("CAMBIO");
						break;

				} 
			}

			


			agregarElemento(item){
				item.id = listado.length;
				listado.push(item);
				this.emit("CAMBIO");
			}

			getTodosElementos(){
				return listado;
			}

			addChangeListener(callback){
				this.on("CAMBIO",callback);
			}

			removeChangeListener(callback){
				
				this.removeListener("CAMBIO", callback);
			}


			getSuma() {
				let totalBudget = 0;
				listado.forEach((item) => {
					totalBudget += parseFloat(item.precio);
				});

				return totalBudget;
			}
}

export default new ProyectoStore();





