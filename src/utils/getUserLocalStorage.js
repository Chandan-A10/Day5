
export const getUserLocalStorage=(val)=>{
    const arr=localStorage.getItem('userDetails')
    let user;
    if(arr!==null){
        JSON.parse(arr).forEach((x)=>{
            if(x.name===val.username && x.password===val.password){
                user= x;
            }
        })
        return user;
    }
    return 0;
}