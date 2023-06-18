import { createSlice } from "@reduxjs/toolkit";
const userSlice=createSlice({
    name:'user',
    initialState:{
        current:localStorage.getItem('user')?JSON.parse(localStorage.getItem('user')):{},
        token:localStorage.getItem('token')?localStorage.getItem('token'):''
    },
    reducers:{
        "setCurrent":(state,action)=>{
            state.current=action.payload
        },
        "setToken":(state,action)=>{
            state.token=action.payload;
        }
    }
})
export default userSlice.reducer
export const {setCurrent,setToken}=userSlice.actions