import { createSlice } from "@reduxjs/toolkit";
const m={
    email:'hello@naver.com',
    password:'hello1234'
}
export const memberSlice=createSlice({
    name:'member',
    initialState:{data:[]},
    reducers:{
        addMember:(state,action)=>{
            console.log('........',action.payload)
            state.data.push(action.payload);
         
        },
        removeMember:(state,action)=>{

        }
    }
});
export default memberSlice.reducer;
export const {addMember,removeMember}=memberSlice.actions;