import React from 'react'
import AppUrl from '../../../API/AppUrl'
import { Link } from 'react-router-dom'

export default function AdminProductItem(props) {
  const product=props.product
  const number=props.number
  const handleDelete=props.handleDelete
  const handlePublish=props.handlePublish
  var myView=product.attributes.publishedAt===null?<input name={product.id} onClick={handlePublish} style={{ width:'2em',cursor:'pointer' }} type='range' min={0} max={1} value={0}></input>:
  <input  name={product.id} onClick={handlePublish} style={{ width:'2em',cursor:'pointer' }} type='range' min={0} max={1} value={1}></input>
  return (
    <tr className="odd">
                  <td className="dtr-control sorting_1 " tabIndex={0}>
                    {number}
                  </td>
                  <td>{product.id}</td>
                  <td>{product.attributes.productName}</td>
                  <td ><img style={{ width:'100px' }}  src={AppUrl.ImageURL+product.attributes.image.data[0].attributes.url} alt="" /></td>

                  <td>{product.attributes.price}</td>
                  <td>{myView}</td>
                  <td style={{ fontSize:'1.2em',display:'flex', justifyContent:'space-around' }} ><i className="icon-eye-open" style={{ cursor:'pointer' }}></i><Link to={'/admin/product/edit/'+product.id}><i className="icon-edit" style={{ cursor:'pointer' }}></i></Link><i className="icon-trash" name={product.id} onClick={handleDelete} style={{ cursor:'pointer' }}></i></td>
                </tr>
  )
}

