import { configureStore } from "@reduxjs/toolkit";
import memberReducer from "./redux/member"
import loginReducer from "./redux/login";
export default configureStore({
    reducer:{
     members:memberReducer   ,
     login:loginReducer
    }
})