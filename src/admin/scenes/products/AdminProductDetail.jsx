import React, { useState } from 'react'
import productApi from '../../../API/productApi'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Loading from '../../../components/Loading'
import formatDate from '../../../helpers/formatDate'
import PictureBox from '../../../scenes/productDetail/PictureBox'

export default function AdminProductDetail() {
  const {id}=useParams()
  var [product,setProduct]=useState([])
  var [loading,setLoading]=useState(true)
  var params={
    populate:'*'
  }
  useEffect(()=>{
    const fetchData= async()=>{
      var respone2=await productApi.get(id,params)
      setProduct(respone2.data.data)
      setLoading(false)
    }
    
    fetchData()
  },[id])
  console.log(product)
  var myView1=loading===true?<Loading/>:<PictureBox images={product.attributes.image.data}/>
  var myView = loading === true ? <Loading/> : <>
  <tr>
    <td>ID</td>
    <td>{id}</td>
  </tr>
  <tr>
    <td>Product Name</td>
    <td>{product.attributes.productName}</td>
  </tr>
  <tr >
    <td>Images</td>
    <td >{myView1}</td>
  </tr>
  <tr>
    <td>Description</td>
    <td>{product.attributes.description}</td>
  </tr>
  <tr>
    <td>Price</td>
    <td>{product.attributes.price}</td>
  </tr>
  <tr>
    <td>Category Name</td>
    <td>{product.attributes.category.data.attributes.categoryName}</td>
  </tr>
  <tr>
  <td>Created At</td>
  <td>{ formatDate(product.attributes.createdAt) }</td>
</tr>
<tr>
  <td>Published At</td>
  <td>{ formatDate(product.attributes.publishedAt) }</td>
</tr>
<tr>
  <td>Updated At</td>
  <td>{ formatDate(product.attributes.updatedAt) }</td>
</tr>
</>;
      
      
  return (
    <div className='row'>
      <table className='detailTable' style={{ width:"100%" }} >
          <tr>
            <th style={{ width:'30%' }}>Fileds</th>
            <th>Value</th>
          </tr>
         {myView}
      </table>
    </div>
  )
}

