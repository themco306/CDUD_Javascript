import React, { useEffect, useState } from "react";
import PictureBox from "./PictureBox";
import Loading from "../../components/Loading";
import categoryApi from "../../API/categoryApi";
import productApi from "../../API/productApi";
import { useParams } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { addToCart } from "../../state/CartSlice";
export default function ProductDetail() {
  var {id}=useParams()
  const dispatch=useDispatch()
  const [product,setProduct]=useState({})
  const [loading, setLoading] = useState(true)
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
  },[])
  var myView1=loading===true?<Loading/>:<PictureBox images={product.attributes.image.data}/>
  var myView2=loading===true?<Loading/>:<div><h3>{product.attributes.productName}</h3>
  <hr className="soft" />
  <form className="form-horizontal qtyFrm">
    <div className="control-group">
      <label className="control-label">
        <span>{product.attributes.price.toLocaleString('vi-VN')} VND</span>
      </label>
      <div className="controls">
        <input type="number" className="span6" placeholder="Qty." />
      </div>
    </div>
    <p>
      <button type="submit" className="shopBtn" onClick={()=>dispatch(addToCart({
          item:{...product,count:1}
        }))}>
        <span className=" icon-shopping-cart" /> Add to cart
      </button>
    </p>
  </form></div>
  var myView3=loading===true?<Loading/>:<div><p>
  {product.attributes.description}
</p></div>
  return (
    <div className="row">
        <ul className="breadcrumb">
          <li>
            <a href="index.html">Home</a> <span className="divider">/</span>
          </li>
          <li>
            <a href="products.html">Items</a> <span className="divider">/</span>
          </li>
          <li className="active">Preview</li>
        </ul>
        <div className="well well-small">
          <div className="row-fluid">
            <div className="span5">
             {myView1}
            </div>
            <div className="span7">
              {myView2}
            </div>
          </div>
          <hr className="softn clr" />
          <ul id="productDetail" className="nav nav-tabs">
            <li className="active">
              <a href="#home" data-toggle="tab">
                Product Details
              </a>
            </li>
          </ul>
          <div id="myTabContent" className="tab-content tabWrapper">
            <div className="tab-pane active" id="home">
              <h4>Product Information</h4>
              {myView3}
            </div>
          </div>
        </div>
      </div>
  );
}
