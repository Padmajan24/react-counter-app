import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset,incrementByAmount } from '../redux/counterSlice'

export const Counter = () => {
    const[amount,setAmount]= useState(0)
    const dispatch = useDispatch()
    const {count} = useSelector(state=>state.counterReducer)

    const  handleIncrementByAmount =()=>{

    if(amount){
        dispatch(incrementByAmount(parseInt(amount)))
        
    }else{
        alert("please enter the number ")
    }
}
  return (
    <div >
        <h1 className='text-center'>Counter app</h1>
        <div className='border p-5 rounded mt-5'>
            <h1 style={{fontSize:'80px'}} className='text-center text warning'>{count}</h1>
            <div className='d-flex justify-content-between mt-3 w-100'>
                <button onClick={()=>dispatch(decrement())} className='btn btn-warning'>Decrement</button>
                <button onClick={()=>dispatch(reset())}className='btn btn-danger ms-2'>Reset</button>
                <button onClick={()=>dispatch(increment())} className='btn btn-success ms-2'>Increment</button>
            </div>
            <div className='d-flex justify-content-between align-items-center mt-5 w-100  '>
                <input onChange={e=>setAmount(e.target.value)} type="text" className='form-control ' placeholder='Incremented Counter Amount' />
                <button onClick={handleIncrementByAmount} className='btn btn-primary ms-2'>Increment</button>

            </div>
        </div>
    </div>
  )
}
