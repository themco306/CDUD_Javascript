import axios from 'axios'
import React, { useState } from 'react'
import axiosInstance from '../API/axiosInstance'

export default function FileUpload(props) {
    var [file,setFile]=useState(null)
    const addImage=props.addImage
    const handleChange=(e)=>{
        setFile(e.target.files[0])
    }
    const handleUpload = async (e)=>{
        const data=new FormData()
        data.append('files',file)
        e.target.innerText='Uploading......'
        const respone = await axios({
            method:'POST',
            url:'http://localhost:1337/api/upload',
            data
        })
        e.target.innerText='Upload'
        var id = respone.data[0].id
        var url= respone.data[0].url
        addImage(id,url)
    }
  return (
    <div className='fileUpload'>
        <input onChange={handleChange} type="file" />
        <button className='btn btn-success' onClick={handleUpload} >Upload</button>
    </div>
  )
}
