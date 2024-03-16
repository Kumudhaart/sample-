import React from 'react'

export default function Component2(props) {
    props.setArray(props.array.push({1:"one"}))
    props.setArray(props.array.push({2:"two"}))
  return (
    <div>component2</div>
  )
}
