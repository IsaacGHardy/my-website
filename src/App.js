import './App.css';
import { homeWidgets, workWidgets, travelWidgets } from './data';
import { Header, NavBar, MainContent } from './components';
import React, { useState } from 'react';

function App() {
  const [selected, setSelected] = useState('home');

  return (
    <div className="App">
      <Header />
      <NavBar setSelected={setSelected} />
      <MainContent selected={selected} />
    </div>
  );
}

export default App;
