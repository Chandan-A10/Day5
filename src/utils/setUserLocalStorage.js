export const setUserLocalStorage=(values,role)=>{
    const obj={
        id:Date.now(),
        name:values.username,
        password:values.password,
        role:role
    }
    let arr=JSON.parse(localStorage.getItem('userDetails')) || []
    arr.push(obj)
    localStorage.setItem('userDetails',JSON.stringify(arr))
    return obj.id;
}