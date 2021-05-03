import './App.css';
import React from 'react'
import Navbar from './components/Navbar';
import CartContainer from './components/CartContainer'
import {GlobalProvider} from './context/GlobalState'



function App() {
  return (
    <GlobalProvider>
       <div className="App">
          <Navbar />
          <CartContainer />
      </div>
    </GlobalProvider>
  );
}

export default App;
