import React from 'react';
import NavBar from './components/NavBar';
import AgregarElementoComponent from './components/AgregarElementoComponent';
import ItemsList from './components/ItemList';

class App extends React.Component {
  render() {
    return (
      <div >
        <NavBar />
        <AgregarElementoComponent />
        <ItemsList />
      </div>
    );
  }
}

export default App;
