import { createSlice } from "@reduxjs/toolkit";
const userInit={
    name:'홍길동',
    age:0,
    email:'test@test.com'
}
export const userSlice=createSlice({
    name:"user1",
    initialState:{aaaa:userInit},
    reducers:{
        login:(state,action)=>{
            state.aaaa=action.payload;
        }
    }
})
export default userSlice.reducer; //왜 reducers가 아닐까?
export const {login} = userSlice.actions;