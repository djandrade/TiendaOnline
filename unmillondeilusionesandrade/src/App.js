import logo from './logo.svg';
import './App.css';
import Navigation from './components/NavBar';
import Items from './components/ItemListContainer';
import React from 'react';

function App() {
  const msj = "a su tienda un millon de ilusiones...!";
  return (
    <React.Fragment>
      <div className="App">
        <Navigation />
        <header className='App-header'>
          <Items greeting={msj} />
        </header>
      </div>
    </React.Fragment>
    
  );
}

export default App;
