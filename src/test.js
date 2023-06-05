import React from 'react'
import categoryApi from './API/categoryApi'

export default function Test() {
    const   fetchCategories= async ()=>{
        var response=await categoryApi.getAll()
        console.log(response.data.data)
    }
    fetchCategories()
  return (
    <div>
      test
    </div>
  )
}
