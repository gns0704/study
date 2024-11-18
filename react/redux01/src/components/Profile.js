import { useSelector } from "react-redux"

const Profile=()=>{
    const user=useSelector((state)=>state.user11.aaaa);
    return (
        <div>
            <h1>{user.name}</h1>
            <div>{user.age}</div>
            <div>{user.email}</div>
        </div>
    )
}
export default Profile;