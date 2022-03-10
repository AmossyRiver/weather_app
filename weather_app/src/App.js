import React from 'react';
import './App.css';
import Forecast from "./components/Forecast/Forecast";

function App() {
  return (
    <div className="App">
      <header className="App-header">
     <h1> Amossy Weather</h1>
      </header>
        <main>
            <Forecast />
        </main>
        <footer>
            Page created by River Amoss
        </footer>
    </div>
  );
}

export default App;
