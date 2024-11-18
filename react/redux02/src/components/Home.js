import { useSelector } from "react-redux";

const Home =()=>{
  const login=useSelector(state=>state.login.loginEmail);
  return (
    <div>
    <h1>Home</h1>
    {login?`${login.email}님 환영합니다.`:''}
    </div>
  )
}
export default Home;