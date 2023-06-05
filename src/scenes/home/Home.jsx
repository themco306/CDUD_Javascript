import React, { useEffect, useState } from 'react'
import MainCarousel from './MainCarousel'
import ProductBox from '../../components/ProductBox'
import Loading from '../../components/Loading'
import productApi from '../../API/productApi'
export default function Home() {
  var [products,setProducts]=useState({})
  var [loading,setLoading]=useState(true)
  var params={
    populate:'*',

  }
  useEffect(()=>{
    const fetchData= async()=>{
      var respone2=await productApi.getAll(params)
      setProducts(respone2.data.data)
      setLoading(false)
      console.log('31',respone2)
    }
    fetchData()
  },[])
  console.log('3',products)
  var myView= loading===true? <Loading/>:<ProductBox products={products}/>
  return (
    <div>
     <MainCarousel/>
     {myView}
    </div>
  )
}
