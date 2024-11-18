import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMember } from "../redux/member";
const Join=()=>{
    const members=useSelector((state)=>state.members.data);
    const dispatch=useDispatch();
    const txtEmail=useRef("");
    const txtPassword=useRef("");
    useEffect(()=>{
        console.log(members);
    })

    const register=()=>{
        dispatch(addMember({email:txtEmail.current.value,password:txtPassword.current.value}));
        console.log(members);
        txtEmail.current.value="";
        txtPassword.current.value="";
        txtEmail.current.focus();
    }
    return (
        <div>
            <h1 class="text-center">회원등록</h1>
            <form class="max-w-sm mx-auto">
                <div class="mb-5">
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">이메일</label>
                    <input type="text" ref={txtEmail} id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"/>
                </div>
                <div class="mb-5">
                    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">비밀번호</label>
                    <input type="password" id="password"  ref={txtPassword}  class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" />
                </div>
                <div class="mb-5">
                    <label for="repeat-password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">비밀번호 확인</label>
                    <input type="password" id="repeat-password" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" />
                </div>
                <button type="button" onClick={register} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">등록</button>
            </form>
        </div>
    )

}
export default Join;