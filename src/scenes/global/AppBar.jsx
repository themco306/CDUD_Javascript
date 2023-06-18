import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Logout from '../../auth/Logout'
export default function AppBar() {
  const isLoggedIn = useSelector((state) => state.user.token)?true:false;
  var cartItems=useSelector((state) => state.cart.items)
  const totalItems=cartItems.reduce((total,item)=>{
    return total+item.count
  },0)
  const total=cartItems.reduce((totalPrice,item)=>{
    console.log('item',item)
    return totalPrice+(item.attributes.price*item.count)
  },0)
  var myView=isLoggedIn? <Logout/>:<><Link to="/register"><span className="icon-edit" />  Register </Link> 
  <Link to="/login"><span className="icon-signin" /> Login</Link></>

  return (
      <div className="navbar navbar-inverse navbar-fixed-top">
        <div className="topNav">
          <div className="container">
            <div className="alignR">
              <div className="pull-left socialNw">
                <a href="#ST"><span className="icon-twitter" /></a>
                <a href="#ST"><span className="icon-facebook" /></a>
                <a href="#ST"><span className="icon-youtube" /></a>
                <a href="#ST"><span className="icon-tumblr" /></a>
              </div>
              <a href="index.html"> <span className="icon-home" /> Home</a> 
              <a href="#ST"><span className="icon-user" /> My Account</a> 
              {myView}
              <Link to="/cart"><span className="icon-shopping-cart" /> {totalItems} Item(s) - <span className="badge badge-warning"> {total.toLocaleString('vi-VN')}</span></Link>
            </div>
          </div>
        </div>
      </div>
  )
}
