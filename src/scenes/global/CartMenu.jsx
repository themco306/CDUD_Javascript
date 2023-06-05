import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import AppUrl from '../../API/AppUrl'
import { useDispatch } from 'react-redux'
import { removeFromCart,increaseCount,decreaseCount } from '../../state/CartSlice'
export default function CartMenu() {
  const dispatch=useDispatch()
  var cartItems=useSelector((state) => state.cart.items)
  console.log('55',cartItems)
  const totalItems=cartItems.reduce((total,item)=>{
    return total+item.count
  },0)
  const total=cartItems.reduce((totalPrice,item)=>{
    console.log('item',item)
    return totalPrice+(item.attributes.price*item.count)
  },0)
  var myView=cartItems.map((item)=>(
    <tr>
    <td><img width={100} src={AppUrl.ImageURL+ item.attributes.image.data[0].attributes.url} alt='00' /></td>
    <td>{item.attributes.productName}</td>
    <td> - </td>
    <td><span className="shopBtn"><span className="icon-ok" /></span> </td>
    <td>{item.attributes.price.toLocaleString('vi-VN')} VND</td>
    <td>
      <input className="span1" style={{maxWidth: 34}} placeholder={1} id="appendedInputButtons" size={16} type="text" value={item.count} />
      <div className="input-append">
        <button className="btn btn-mini" type="button" onClick={()=>dispatch(decreaseCount({id:item.id}))}>-</button><button className="btn btn-mini" type="button" onClick={()=>dispatch(increaseCount({id:item.id}))}> + </button><button className="btn btn-mini btn-danger" type="button" onClick={()=>dispatch(removeFromCart({id:item.id}))}><span className="icon-remove" /></button>
      </div>
    </td>
    <td>{(item.attributes.price*item.count).toLocaleString('vi-VN')} VND</td>
  </tr>
  ))

  return (
    <div className="well well-small">
      <h1>Check Out <small className="pull-right"> {totalItems} Items are in the cart </small></h1>
      <hr className="soften" />	
      <table className="table table-bordered table-condensed">
        <thead>
          <tr>
            <th>Image</th>
            <th>Product Name</th>
            <th>	Ref. </th>
            <th>Avail.</th>
            <th>Unit price</th>
            <th>Qty </th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
         {myView}
          
          <tr>
            <td colSpan={6} className="alignR">Total products:	{totalItems}</td>
            <td> {total.toLocaleString('vi-VN')} VND</td>
          </tr>
        </tbody>
      </table><br />
      <table className="table table-bordered">
        <tbody>
          <tr>
            <td> 
              <form className="form-inline">
                <label style={{minWidth: 159}}> VOUCHERS Code: </label> 
                <input type="text" className="input-medium" placeholder="CODE" />
                <button type="submit" className="shopBtn"> ADD</button>
              </form>
            </td>
          </tr>
        </tbody>
      </table>
      <a href="products.html" className="shopBtn btn-large"><span className="icon-arrow-left" /> Continue Shopping </a>
      <a href="login.html" className="shopBtn btn-large pull-right">Next <span className="icon-arrow-right" /></a>
    </div>

  )
}
