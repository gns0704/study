import { Link } from "react-router-dom";

const Header=()=>{
    return (
        <div>
            <ul class="flex flex-cols gap-2 justify-center">
                <li class="bg-blue-500 p-2 rounded-md text-white bold hover:bg-green-700"><Link to="/">Home</Link></li>
                <li  class="bg-blue-500 p-2 rounded-md text-white bold hover:bg-green-700"><Link to="/join">회원추가</Link></li>
                <li  class="bg-blue-500 p-2 rounded-md text-white bold hover:bg-green-700"><Link to="/list">회원목록</Link></li>
                <li  class="bg-blue-500 p-2 rounded-md text-white bold hover:bg-green-700"><Link to="/login">로그인</Link></li>
               
            </ul>
            <div class="flex justify-end"><button class="my-button">게시판</button></div>
        </div>
    )
}
export default Header;