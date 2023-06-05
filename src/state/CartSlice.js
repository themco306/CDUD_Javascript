import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items:[]
    },
    reducers:{
        addToCart:(state,action)=>{
            state.items=[...state.items, action.payload.item]
        },
        removeFromCart:(state,action)=>{
            state.items=state.items.filter((item)=>{
                return item.id !== action.payload.id
            })
        },
        increaseCount:(state,action)=>{
            state.items=state.items.map((item)=>{
                if(item.id === action.payload.id){
                    item.count++
                }
                return item
            })
        },
        decreaseCount:(state,action)=>{
            state.items=state.items.map((item)=>{
                if(item.id === action.payload.id && item.count>1){
                    item.count--
                }
                return item
            })
        },
    }
})
export const{
    addToCart,
    removeFromCart,
    increaseCount,
    decreaseCount
}=cartSlice.actions
export default cartSlice.reducer