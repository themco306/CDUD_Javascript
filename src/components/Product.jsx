import React from 'react'
import AppUrl from '../API/AppUrl'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCart } from '../state/CartSlice'
export default function Product(props) {
  const dispatch=useDispatch()
  var product=props.product
  return (
    <div className="thumbnail" style={{ height: '340px'}}>
    <Link to={'/product/'+product.id} className="overlay" > ta</Link>
    <Link to={'/product/'+product.id}><img src={AppUrl.ImageURL+ product.attributes.image.data[0].attributes.url} alt='00' /></Link>
    
    <div className="caption cntr">
        <p>{product.attributes.productName}</p>
        <p><strong>{product.attributes.price.toLocaleString('vi-VN')}</strong> VND</p>
        <p>{product.attributes.category.data.attributes.categoryName}</p>
        <h4><Link className="shopBtn" to="#ST" title="add to cart" onClick={()=>dispatch(addToCart({
          item:{...product,count:1}
        }))}> Add to cart </Link></h4>
        <div className="actionList">
        <a className="pull-left" href="#ST">Add to Wish List </a> 
        <a className="pull-left" href="#ST"> Add to Compare </a>
        </div> 
        <br className="clr" />
    </div>
    </div>

  )
}
