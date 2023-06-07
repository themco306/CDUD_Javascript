import React, { useEffect, useState } from 'react'
import SelectBox from './SelectBox'
import categoryApi from '../API/categoryApi'

export default function CategorySelect() {
    var [categories,setCategories]=useState([])
    var [loading,setLoading]=useState(true)
    var myView=loading===true?<select><option>loading categories.....</option></select>:<SelectBox name='category' defaultValue={1} data={categories}/>
    useEffect(()=>{
        const fetchData= async()=>{
          var respone1=await categoryApi.getAll()
          
          var temp=respone1.data.data
          setCategories(temp.map(category=>{
            return {
                label:category.attributes.categoryName,
                value:category.id
            }
          }))
          setLoading(false)
        }
        
        fetchData()
      },[])
  return (
    <>
    {myView}
    </>
  )
}
