import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CategorySelect from "../../../components/CategorySelect";
import { validateProduct } from "../../../helpers/validate";
import productApi from "../../../API/productApi";
import FileUpload from "../../../components/FileUpload";
import AppUrl from "../../../API/AppUrl";
import { useParams } from "react-router-dom";
export default function AdminProductEdit() {
  const {id}=useParams()
  const [data, setData] = useState({
    "productName":"",
    "description":"",
    "category":"",
    "price":"",
    "image":[]
  });
  const [images,setImages]=useState([])
  useEffect(()=>{
    const fetchData= async()=>{
      var params={
        populate:"*"
      }
      var respone=await productApi.get(id,params)
      var oldProduct=respone.data.data
      setData({ 
        "productName":oldProduct.attributes.productName,
        "description":oldProduct.attributes.description,
        "category":oldProduct.attributes.category.data.id,
        "price":oldProduct.attributes.price,
        "image":oldProduct.attributes.image.data.map((img)=>(img.id))
      })
      var oldImages=oldProduct.attributes.image.data.map((img)=>{
        return (
          {
            id: img.id,
            url:img.attributes.url
          }
        )
      })
      setImages([...oldImages])
    }
    fetchData()
  },[id])
  const addImage=(id,url)=>{
    setData({
      ...data,
      "image":[
        ...data.image,
        id
      ]
    })
    setImages([
      ...images,
      {
        id: id,
        url: url
      }
    ])
    
  }
  const handleRemove=(e)=>{
    var id = e.target.getAttribute("name")
    setData({
      ...data,
      "image":data.image.filter((item)=> item!=id)})
    setImages(images.filter((img)=>{
      return img.id != id}))
  }
  
  var myViewImage=images.length == 0?'no image':images.map((img)=>{
    return <div style={{ width: '100px', margin: '5px', border: '1px red solid', position: 'relative' }}>
    <img src={AppUrl.ImageURL + img.url} alt='jinh' />
    <i  name={img.id} onClick={handleRemove} className="icon-remove" style={{ cursor:'pointer', position: 'absolute', top: '0', right: '0', width: '30px', height: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}></i>

  </div>
  })
  const handleSubmit=(e)=>{
    e.preventDefault();
    var err=(validateProduct(data))
    if(err==''){
      const updateProduct=async (id,data)=>{
        var sendData={
          "data":data
        }
        try {
          const respone= await productApi.update(id,sendData)
          if(respone.status==200){
            toast.success("Product Added Successfully");
          }
          document.getElementById('editProduct').reset()
          // setData({ 
          //   "productName":"",
          //   "description":"",
          //   "category":"",
          //   "price":"",
          //   "image":[]
          // })
        } catch (error) {
          toast.error("Something Went Wrong1: "+error);
        }
      }
      updateProduct(id,data)
  }
  else{
    toast.error("Something Went Wrong2: "+err);
    return false
  }
}
  const handleAddChange=(e)=>{
    setData({
      ...data,
      [e.target.name]:e.target.value
      })
      console.log(data)
  }


  return (
    <div className="row">
      <div className="col-7">
      <form id='editProduct' onSubmit={handleSubmit}>
        <div className="form-group row">
          
          <label htmlFor="productName" className="col-4 col-form-label">
            Product Name
          </label>
          <div className="col-8">
            <input
              id="productName"
              name="productName"
              placeholder="productName"
              type="text"
              className="form-control"
              required="required"
              onChange={handleAddChange}
              value={data.productName}
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="description" className="col-4 col-form-label">
            Description
          </label>
          <div className="col-8">
            <textarea
              id="description"
              name="description"
              cols={40}
              rows={5}
              className="form-control"
              required="required"
              defaultValue={""}
              onChange={handleAddChange}
              value={data.description}
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="price" className="col-4 col-form-label">
            Price
          </label>
          <div className="col-8">
            <input
              id="price"
              name="price"
              placeholder={100000}
              type="text"
              className="form-control"
              required="required"
              onChange={handleAddChange}
              value={data.price}
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="select" className="col-4 col-form-label">
            category
          </label>
          <div className="col-8">
            <CategorySelect defaultValue={data.category} handleAddChange={handleAddChange}/>
          </div>
        </div>
        <div className="form-group row">
          <div className="offset-4 col-8">
            <button name="submit" type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </form>
      </div>
      <div className="col-5" >
        <FileUpload addImage={addImage}/>
        <div id="uploadImgs" style={{ display: 'flex', flexWrap: 'wrap' }}>{myViewImage}</div>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        rtl={false}
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
}
