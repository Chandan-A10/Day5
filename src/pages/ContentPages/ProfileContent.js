
import { useNavigate, useSearchParams } from "react-router-dom"

export const ProfileContent=()=>{
    const [searchparams]=useSearchParams()
    const id=searchparams.get('id')
    const navigator=useNavigate()
    if(!id){
        navigator('/login')
        return;
    }
    const users=JSON.parse(localStorage.getItem('userDetails'))
    let name;
    users.forEach((x)=>{
        if(x.id.toString()===id){
           name=x.name;
            return;
        }
    })
    return(
        <div className="divel">
            <h1>
                Welcome {name} to Profile Page
            </h1>
            <h3>
                You can edit your user <b>Profile</b> here
            </h3>
        </div>
    )
}