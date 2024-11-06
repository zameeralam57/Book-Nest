import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name:'user',
    initialState:{
        currentUser:null,
        isError:false
    },
    reducers:{
     setCurrentUser:(state,action)=>{
        state.currentUser=action.payload;
     },
     signout:(state,action)=>{
        state.currentUser=null;
     },
     setUpdateProfile:(state,action)=>{
        state.currentUser=action.payload;
        
    }
    }
})

export const {setCurrentUser,signout,setUpdateProfile}= slice.actions;
export default slice.reducer;