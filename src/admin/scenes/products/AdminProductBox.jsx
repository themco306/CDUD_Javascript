import React, { useEffect, useState } from "react";
import AdminProductItem from "./AdminProductItem";
import Loading from "../../../components/Loading";
import productApi from "../../../API/productApi";
import { Link, useParams } from "react-router-dom";
import Paginate from "../../../components/Paginate";

export default function AdminProductBox() {
  var [products,setProducts]=useState({})
  var [loading,setLoading]=useState(true)
  var {pageNum}=useParams()
  var [totalPage,setTotalPage]=useState(1)
  const [msgSuccess,setSuccessMsg]=useState(null)
  const [msgWarning,setWarningMsg]=useState(null)
  var [loadData,setLoadData]=useState(1)
  const [viewOption,setViewOption]=useState('preview')
  const handleDelete=(e)=>{
    const deleteProduct= async (id)=>{
      var c=window.confirm("Delete?")
      if(c){
      try {
        e.target.classList.remove("fa-trash")
        e.target.classList.add("fa-spinner")
        await productApi.delete(id)
        e.target.classList.add("fa-trash")
        e.target.classList.remove("fa-spinner")

        setSuccessMsg('Delete success: '+id)
        setLoadData(loadData+1)
      } catch (error) {
        setWarningMsg('Delete error: '+id + error.message)
      }
      finally{
        window.scroll(0,0)
      }
    }
    }
    deleteProduct(e.target.getAttribute("name"))
  }
  const handleSelect=(e)=>{
    setViewOption(e.target.value)
  }
  const handlePublish=(e)=>{
    var data={
      "data":{
        "publishedAt": e.target.value == 0?Date.now():null
      }
      
    }
    const togglePublish =async (e)=>{
      await productApi.update(e.target.getAttribute('name'),data)
      setLoadData(loadData+1)
    }
    togglePublish(e)

  }
  var params={
    populate:"*",
    pagination:{
      page:pageNum?pageNum:1,
      pageSize:12
    },
    publicationState:viewOption
  }
  useEffect(()=>{
    const fetchData= async()=>{
      var respone2=await productApi.getAll(params)

      setProducts(respone2.data.data)
      setTotalPage(respone2.data.meta.pagination.pageCount)
      setLoading(false)
    }
    
    fetchData()
  },[pageNum,loadData,viewOption])
  var myView= loading===true? <Loading/>:products.map((product,i)=>(
    <AdminProductItem  number={(params.pagination.page-1)*params.pagination.pageSize+i+1} key={product.id} product={product} handleDelete={handleDelete} handlePublish={handlePublish}/>
  ))
  
  return (
    <div className="card-body">
      <div className="col-12">
        <p className="bg-success">{msgSuccess}</p>
        <p className="bg-warning">{msgWarning}</p>
      </div>
      <div id="example1_wrapper" className="dataTables_wrapper dt-bootstrap4">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <div className="dt-buttons btn-group flex-wrap">
             <Link to={'/admin/product/add'} className="btn btn-success">Create</Link>
            </div>
          </div>
          <div className="col-sm-12 col-md-6">
            <div id="example1_filter" className="dataTables_filter">
              <select onChange={handleSelect}>
                <option value={'preview'}>Preview</option>
                <option value={'live'}>Live</option>
              </select>
              <label>
                Search:
                <input
                  type="search"
                  className="form-control form-control-sm"
                  placeholder
                  aria-controls="example1"
                />
              </label>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <table
              id="example1"
              className="table table-bordered table-striped dataTable dtr-inline"
              aria-describedby="example1_info"
            >
              <thead>
                <tr>
                  <th
                    className="sorting "
                    tabIndex={0}
                    aria-controls="example1"
                    rowSpan={1}
                    colSpan={1}
                    aria-sort="ascending"
                    aria-label="Rendering engine: activate to sort column descending"
                  >
                    STT
                  </th>
                  <th
                    className="sorting"
                    tabIndex={0}
                    aria-controls="example1"
                    rowSpan={1}
                    colSpan={1}
                    aria-label="Browser: activate to sort column ascending"
                  >
                    ID
                  </th>
                  <th
                    className="sorting"
                    tabIndex={0}
                    aria-controls="example1"
                    rowSpan={1}
                    colSpan={1}
                    aria-label="Platform(s): activate to sort column ascending"
                  >
                    Name
                  </th>
                  <th
                    className="sorting"
                    tabIndex={0}
                    aria-controls="example1"
                    rowSpan={1}
                    colSpan={1}
                    aria-label="Engine version: activate to sort column ascending"
                  >
                    Image
                  </th>
                  <th
                    className="sorting"
                    tabIndex={0}
                    aria-controls="example1"
                    rowSpan={1}
                    colSpan={1}
                    aria-label="CSS grade: activate to sort column ascending"
                  >
                    Price
                  </th>
                  <th
                    className="sorting"
                    tabIndex={0}
                    aria-controls="example1"
                    rowSpan={1}
                    colSpan={1}
                    aria-label="CSS grade: activate to sort column ascending"
                  >
                    Publish
                  </th>
                  <th
                    className="sorting"
                    tabIndex={0}
                    aria-controls="example1"
                    rowSpan={1}
                    colSpan={1}
                    aria-label="CSS grade: activate to sort column ascending"
                  >
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {myView}
              </tbody>
            </table>
            <div ><Paginate totalPage={totalPage} currentPage={pageNum?pageNum:1} basePath='http://localhost:3000/admin/product/page/'></Paginate></div>
          </div>
        </div>
      </div>
    </div>
  );
}
