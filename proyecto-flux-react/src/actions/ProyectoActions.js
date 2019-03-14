import Dispatcher from '../dispatchers';
import ActionTypes from '../constants';
import RemoteAPI from '../utils';

class ProyectoActions{
		agregarElemento(item){
			Dispatcher.dispatch({
				actionType : ActionTypes.ADD_NEW_ITEM,
				payload : item
			});
		}

		remoto(){
    		Dispatcher.dispatch({
        		actionType: ActionTypes.INITIALISE,
        		initialData: {
            	bill: RemoteAPI.get() // I switch to getBillServer for date from server
        }
    });
}

}

export default new ProyectoActions();