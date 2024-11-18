import { createSlice } from "@reduxjs/toolkit";

export const loginSlice=createSlice({
    name:'login',
    initialState:{loginEmail:''},
    reducers:{
        login:(state,action)=>{
            state.loginEmail=action.payload;
        }
    }
});
export default loginSlice.reducer;
export const {login}=loginSlice.actions; 