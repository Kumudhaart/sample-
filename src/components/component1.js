import React, { useState } from 'react'
import Component2 from './component2';

export default function Component1() {
    const[array,setArray]=useState([]);
  return (
   <>
   <Component2 array={array} setArray={setArray}/>
   {console.log(array)}
   {
    array.map((item,index)=>{
        return <div>{item[index]}</div>
    })
   }
   </>
  )
}
