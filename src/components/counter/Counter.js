import React, {useRef} from 'react';
import {useSelector,useDispatch} from 'react-redux'
import { decrement, increment, setCustom } from '../../redux/state/counter/counterSlice';
import "./Counter.css"
const Counter = () => {
   
    const myNumber=useRef()
    console.log(myNumber);
    const count= useSelector(state=> state.counter.value);
    const dispatch=useDispatch()
    return (
        <div className='card bgc'> 
              <div className="card-header bg-secondary">
                <h4 className='text-white'>My Counter App</h4>
              </div>
              <div className="card-body">
                <h1>{count}</h1>
                <div className="my-4">
                    <button onClick={()=>dispatch(increment())} className="btn btn-success">Increase</button>
                    <button onClick={()=>dispatch(decrement())} className="btn mx-2 btn-danger">Decease</button>
                </div>
                <div className="my-4">
                    <input className='form-control w-50 my-2' type="number" ref={myNumber}  />
                    <button onClick={()=>dispatch(setCustom(myNumber.current.value))} className="btn  w-50 my-2 btn-danger">set Custom</button>
                </div>
              </div>
        </div>
    );
};

export default Counter;