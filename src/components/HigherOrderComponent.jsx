import React from "react"
import { useState } from "react"

export function HigherOrderComponent(){
    return(
      <>
      <h1>HigherOrderComponent</h1>
      <HigherOrderComponent cmp={Counter} />
   </>
    )
  }
  
  
  export function Counter(){
    const[count,setCount] = useState(0)
    return(
      <>
      <h1>High Order Component : {count}</h1>

      <div className="btnflex2">
      <button className="btn" onClick={()=>setCount(count+1)} >Increment</button>
      <button className="btn" onClick={()=>setCount(count-1)} >Decrement</button>
      </div>
      </>
    )
  }