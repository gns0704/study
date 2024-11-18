import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./redux/user";

export default configureStore(
    {
        reducer:{
            user11:userReducer
        }
    }
)