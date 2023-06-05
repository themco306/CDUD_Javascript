import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
export default function CartMenu() {
  var cartItems=useSelector((state) => state.cart.items)
  console.log('55',cartItems)
  const totalItems=cartItems.reduce((total,item)=>{
    return total+item.count
  },0)
  const total=cartItems.reduce((totalPrice,item)=>{
    console.log('item',item)
    return totalPrice+(item.attributes.price*item.count)
  },0)
  // var myView=cartItems.map(())
//   <tr>
//   <td><img width={100} src="/app/assets/img/e.jpg" alt='00' /></td>
//   <td>Items name here<br />Carate : 22<br />Model : n/a</td>
//   <td> - </td>
//   <td><span className="shopBtn"><span className="icon-ok" /></span> </td>
//   <td>$50.00</td>
//   <td>
//     <input className="span1" style={{maxWidth: 34}} placeholder={1} id="appendedInputButtons" size={16} type="text" defaultValue={2} />
//     <div className="input-append">
//       <button className="btn btn-mini" type="button">-</button><button className="btn btn-mini" type="button"> + </button><button className="btn btn-mini btn-danger" type="button"><span className="icon-remove" /></button>
//     </div>
//   </td>
//   <td>$100.00</td>
// </tr>
  return (
    <div className="well well-small">
      <h1>Check Out <small className="pull-right"> 2 Items are in the cart </small></h1>
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
            <td colSpan={6} className="alignR">Total products:	</td>
            <td> $448.42</td>
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
