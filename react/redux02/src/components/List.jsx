import { useEffect } from "react";
import { useSelector } from "react-redux";

const List=()=>{
    const members=useSelector((state)=>{
       return state.members.data;
    });
    useEffect(()=>{
        console.log(members)
    })
    return (
         <div class="flex justify-center mt-20">
            <table class="sborder-collapse border border-slate-400 w-[80%] h-700  space-x-13">
                <thead class="bg-green-300">
                    <tr class="border-spacing-20 px-6 py-2">
                    <th class="border border-slate-300 px-6 py-2">이메일</th>
                    <th class="border border-slate-300 px-6 py-2">비밀번호</th>
                    </tr>
                </thead>
                <tbody>
                    {members.map((m)=>{
                        return (
                            <tr class="row space-x-3">
                            <td class="border border-slate-300 px-6 py-2">{m.email}</td>
                            <td class="border border-slate-300 px-6 py-2">{m.password}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
        )
}
export default List;