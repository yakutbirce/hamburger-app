import React, { useState } from 'react';
import './App.css';
import BurgerBuilder from './components/BurgerBuilder';
import PriceDisplay from './components/PriceDisplay';

function App() {
  const [ingredients, setIngredients] = useState({
    salad: 0,
    cheese: 0,
    meat: 0,
    bacon: 0,
  });

  return (
    <div className="App">
      <h1>Hamburger App</h1>
      <BurgerBuilder ingredients={ingredients} setIngredients={setIngredients} />
      <PriceDisplay ingredients={ingredients} />
    </div>
  );
}

export default App;


