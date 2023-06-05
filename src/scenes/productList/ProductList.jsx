import React, { useEffect, useState } from "react";
import ProductBox from "../../components/ProductBox";
import CategoryMenu from "./CategoryMenu";
import Loading from "../../components/Loading";
import categoryApi from "../../API/categoryApi";
import productApi from "../../API/productApi";
import { useParams } from "react-router-dom";
import Paginate from "../../components/Paginate";
import Filter from "./Filter";
export default function ProductList() {
  var {pageNum}=useParams()
  var [products,setProducts]=useState({})
  var [categories,setCategories]=useState({})
  var [loading,setLoading]=useState(true)
  var [totalPage,setTotalPage]=useState(1)
  var [filterKey,setFilterKey]=useState(null)
  var [maxPrice,setMaxPrice]=useState(null)
  var [category,setCategory]=useState(null)
  const handleFilterByName=(e)=>{
    setFilterKey(e.target.value)
  }
  const handleFilterByMaxPrice=(e)=>{
    setMaxPrice(e.target.value)
    }
  const handleFilterByCategory=(e)=>{
      if(e.target.innerText=="All Category"){
        setCategory(null)
      }
      else{
        setCategory(e.target.innerText)
      }
  }
  var myView1= loading===true? <Loading/>:<CategoryMenu categories={categories} handleFilterByCategory={handleFilterByCategory}/>
  var myView2= loading===true? <Loading/>:<ProductBox products={products}/>
  var params={
    populate:'*',
    pagination:{
      page:pageNum?pageNum:1,
      pageSize:12
    },
    filters:{
      productName:{
        $contains:filterKey?filterKey:null
      },
      price:{
        $lte:maxPrice?maxPrice:1000000
      },
      category:{
        categoryName:{
          $eq:category?category:null
        }
      }
    }


  }
  useEffect(()=>{
    const fetchData= async()=>{
      var respone1=await categoryApi.getAll()
      var respone2=await productApi.getAll(params)
      setCategories(respone1.data.data)
      setProducts(respone2.data.data)
      setTotalPage(respone2.data.meta.pagination.pageCount)
      setLoading(false)
    }
    
    fetchData()
  },[pageNum,filterKey,maxPrice,category])
  console.log(products)
  return (
    <div className="row">
      <div id="sidebar" className="span3">
        {myView1}
      </div>
      <div className="span9">
        <Filter handleFilterByName={handleFilterByName} handleFilterByMaxPrice={handleFilterByMaxPrice}/>
        {myView2}
        <Paginate totalPage={totalPage} currentPage={pageNum?pageNum:1} basePath='http://localhost:3000/product/page/'></Paginate>
      </div>
      
    </div>
  );
}
