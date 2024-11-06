import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../interceptor.js";
import { apiEndPoint } from "../webApi/webapi";
import { toast } from "react-toastify";
export const fetchCart = createAsyncThunk("cart/fetchCart", async(userId) => {
    let response = await axios.post(apiEndPoint.FETCH_CART, { userId });
    return response.data.cart;
});

export const removeFromCart = createAsyncThunk("cart/remove", async({userId,_id}) => {
let response = await axios.post(apiEndPoint.REMOVE_CART, {userId, _id });
   if(response.data.status){
    toast.success("Book is Remove from the Cart");
    return response.data.cart.cartItems;
   }
});


export const addItemInToCart = createAsyncThunk("cart/addItemInToCart", async(obj) => {
    let response = await axios.post(apiEndPoint.USER_CART, { userId: obj.userId});
    return response.data.result;
});
const slice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: [],
        cartError: null,
        flag: false,
        isLoading : false
    },
    reducers:{
        setCartItems : (state,action)=>{
            state.cartItems = action.payload;
            state.isLoading = true;
        },
        setflag : (state,action)=>{
            state.flag = true;
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(removeFromCart.fulfilled,(state,action)=>{
            state.cartItems = action.payload;
            state.isLoading = false;
        })
    }
});
export const {setCartItems,setRemoveUpdate,flag} = slice.actions;
export default slice.reducer;