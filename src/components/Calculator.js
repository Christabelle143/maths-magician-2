/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState(0);
  const handleClick = (e) => {
    setState((state) => calculate(state, e.target.textContent));
  };
  return (
    <>
      <h1>Maths Magicians</h1>

      <h3>Let's do some maths!</h3>
      <div className="calculator-container">
        <div className="calc-input"><span className="result">{state.next || state.total || 0}</span></div>
        <div className="buttons">
          <button type="button" className="bg-1" onClick={handleClick}>AC</button>
          <button type="button" className="bg-1" onClick={handleClick}>+/-</button>
          <button type="button" className="bg-1" onClick={handleClick}>%</button>
          <button type="button" className="bg-1 active" onClick={handleClick}><span>&#247;</span></button>
          <button type="button" className="bg-1" onClick={handleClick}>7</button>
          <button type="button" className="bg-1" onClick={handleClick}>8</button>
          <button type="button" className="bg-1" onClick={handleClick}>9</button>
          <button type="button" className="bg-1 active" onClick={handleClick}>x</button>
          <button type="button" className="bg-1" onClick={handleClick}>4</button>
          <button type="button" className="bg-1" onClick={handleClick}>5</button>
          <button type="button" className="bg-1" onClick={handleClick}>6</button>
          <button type="button" className="bg-1 active" onClick={handleClick}>-</button>
          <button type="button" className="bg-1" onClick={handleClick}>1</button>
          <button type="button" className="bg-1" onClick={handleClick}>2</button>
          <button type="button" className="bg-1" onClick={handleClick}>3</button>
          <button type="button" className="bg-1 active" onClick={handleClick}>+</button>
          <button type="button" className="zero" onClick={handleClick}>0</button>
          <button type="button" className="bg-1" onClick={handleClick}>.</button>
          <button type="button" className="bg-1 active" onClick={handleClick}>=</button>
        </div>
      </div>
    </>
  );
};

export default Calculator;
