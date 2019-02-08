import React, { Component } from 'react';
import './App.css';
// import House from './Components/House/House';
import Header from './Components/Header/Header';
// import Wizard from './Components/Wizard/Wizard';
// import Dashboard from './Components/Dashboard/Dashboard';
import routes from './routes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header />
        </header>

        <main>
          <div>
            {routes}
          </div>
        </main>
      </div>
    );
  }
}

export default App;
