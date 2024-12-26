"use client";

import PropTypes from 'prop-types';
import React, { useState } from 'react';

export default function Counter( { initialCount } ) {
  const [count, setCount] = useState(initialCount);

  const updateCount = (op) => {
    // Grow accustom to using prevState like in add or sub, that's more idea ideal for functions that rely on the previous value that it updated.
    if (op === 'add') {
      setCount((prevState) => prevState + 1)
    }
    if (op === 'sub') {
      setCount((prevState) => prevState - 1)
    }

    // This statement would be unnecessary considering that the fat arrow already returns the statement, so the two statements above are the ways to properly do this.
    // This statement also throws the following error: Unexpected block statement surrounding arrow body; move the returned value immediately after the `=>`. 
    // if (op === 'sub') {
    //   setCount((prevState) => {return prevState - 1})
    // }

    // These statements work fine as well, but they are more likely to not update properly if the user clicks the button too fast.
    if (op === 'mtp') {
      setCount(count * 2)
    }
    if (op === 'dvd') {
      setCount(count / 2)
    }
    // This is an sample statement for an Object, where after the previous value entry, you spread an object and add a key:value into it.
    // if (op === 'tbd') {
    //   setCount((prevState) => ({...prevState, key: value}))
    // }
    
    // This is an sample statement for an array, where after the previous value entry, you spread an array and add a value into it.
    // if (op === 'tbd2') {
    //   setCount((prevState) => [...prevState, value])
    // }
  };


  return (
    <div>
      <h3>Counter</h3>
      <h5>{count}</h5>
      <button type = "button" onClick={() => updateCount('add')}>Add by 1</button>
      <button type = "button" onClick={() => updateCount('sub')}>Subtract by 1</button>
      <button type = "button" onClick={() => updateCount('mtp')}>Multiply by 2</button>
      <button type = "button" onClick={() => updateCount('dvd')}>Divide by 2</button>
    </div>
  )
};

Counter.propTypes = {
  initialCount : PropTypes.number.isRequired,
}
