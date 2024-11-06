import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../interceptor";
import { apiEndPoint } from "../webApi/webapi";

export const fetchTopProduct = createAsyncThunk('fetchTopProduct',async()=>{
    let response =await axios.get(apiEndPoint.TOP_PRODUCT_API);
    if(response.data.status){
    return response.data.topbookList
    }
})

const slice = createSlice({
    name:'product',
    initialState:{
      TopProductList:[],
      isLoading:false,
      error:null
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchTopProduct.pending,(state,action)=>{
            state.isLoading=true;
        }).addCase(fetchTopProduct.fulfilled,(state,action)=>{
            state.isLoading=false
            state.TopProductList=action.payload

        }).addCase(fetchTopProduct.rejected,(state,action)=>{
            state.isLoading=false;
            state.error="oops Something Went Wrong "
        })
    }
})

export default slice.reducer;