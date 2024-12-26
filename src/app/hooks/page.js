"use client"

import React, { useEffect, useState } from 'react';
import Counter from '@/components/Counter';

export default function Hooks() {
  const [stateHook, setStateHook] = useState('State Hook Default Value');

  // useEfect will start the timer and after the component renders, will rerender after 15 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setStateHook('The useEffect Loaded Me!');
    }, 15000);
    return () => clearTimeout(timer);
  }, []);

  return <>
  <h1>Hooks</h1>
  <div>
    {stateHook}
    <Counter initialCount={0}/>
    <Counter initialCount={100}/>
    <Counter initialCount={10000}/>
    <Counter initialCount={20}/>
  </div>;
</>
}
