// import React, {useState} from 'react'
// import  {useSelector, useDispatch} from "react-redux";
// import {increment, decrement, reset, incrementByAmount } from "./counterSlice";
// const Counter = () => {
//     const counts=useSelector((state)=>state.counter.count);
//     const dispatch=useDispatch();
//     const [incrementAmount, setIncrementAmount] = useState(0)
//     const checkNum=Number(incrementAmount)
//     const resetAll=()=>{
//         setIncrementAmount(0)
//         dispatch(reset())
//     }
//   return (
    
//         <section>
//             <p>{counts}</p>
//             <div>
//                 <button onClick={()=>dispatch(increment())}>+</button>
//                 <button onClick={()=>dispatch(decrement())}>-</button>
//             </div>
//             <div>
//                 <input  type="text"
//                         value={incrementAmount} 
//                         onChange={(e)=>setIncrementAmount(e.target.value)}
//                  />
//                  <button onClick={()=>dispatch(incrementByAmount(checkNum))}>
//                     Add Amount
//                  </button>
//                  <button onClick={resetAll}>Reset</button>

//             </div>
//         </section>
    
//   )
// }

// export default Counter