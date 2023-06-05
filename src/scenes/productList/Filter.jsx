import React from 'react'

export default function Filter(props) {
    var handleFilterByName=props.handleFilterByName
    var handleFilterByMaxPrice=props.handleFilterByMaxPrice
  return (
    <div className='well well-small'>
      <input type='text' placeholder='Filter' className='search' onChange={handleFilterByName}></input>
      <span> Max: </span> <input type='text' placeholder='Price' onChange={handleFilterByMaxPrice}></input>
    </div>
  )
}
