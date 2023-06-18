import React from 'react'
import { Link } from 'react-router-dom'
import { setCurrent, setToken } from "../state/UserSlice";
import { useDispatch } from 'react-redux'
import {ToastContainer,toast} from 'react-toastify'
export default function Logout() {
    const dispatch=useDispatch()
    const handleLogout = () => {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        dispatch(setCurrent({}));
        dispatch(setToken(''));
        toast.success("Logout success");
      };
  return (
    <>
    <Link to="#logout" onClick={handleLogout}><span className="icon-signin" /> Logout</Link>
    </>
  )
}
