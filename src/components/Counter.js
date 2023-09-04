import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../redux/features/counterSlice';


export default function Counter() {
    const count = useSelector((state) => state.counter.counter);
    const dispatch = useDispatch();
  return (
    <>
      <h1>Count is {count}</h1>
      <button onClick={()=> dispatch(decrement())}>decrement</button> &emsp;
      <button onClick={()=> dispatch(increment())}>increment</button>
    </>
  )
}
