import React from 'react';
import ProyectoStore from '../stores/ProyectoStore';

class ItemsList extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			items: ProyectoStore.getTodosElementos()
		};

		this._onChange = this._onChange.bind(this);
	}

	_onChange() {
		this.setState({ items: ProyectoStore.getTodosElementos() });
	}

	componentWillMount() {
		ProyectoStore.addChangeListener(this._onChange);
	}

	componentWillUnmount() {
		ProyectoStore.removeChangeListener(this._onChange);
	}

	render() {

		let noItemsMessage;

		// Show a friendly message instead if there are no items.
		if (!this.state.items.length) {
			noItemsMessage = (<li className="no-items">la lista esta vacía</li>);
		}

		return (
			<ul className="items-list">
				{noItemsMessage}
				{this.state.items.map((itemDetails) => {
					let amountType = parseFloat(itemDetails.amount) > 0 ? 'positive' : 'negative';
					return (<li key={itemDetails.id}>{itemDetails.descripcion} <span className={amountType}>{itemDetails.precio}</span></li>);
				})}
			</ul>
		);
	}
}

export default ItemsList;
