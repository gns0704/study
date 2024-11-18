import { useDispatch } from "react-redux"
import { login } from "../redux/user";

const UserLogin=()=>{
    const dispatch=useDispatch();
    const loginClick=()=>{
        dispatch(login({name:'김자바',age:20,email:'sss@email.com'}))
    }
    return(
        <div>
            <button onClick={loginClick}>로그인</button>
        </div>
    )
}
export default UserLogin;