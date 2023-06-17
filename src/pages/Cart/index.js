import { Button, Card, Empty } from "antd";
import { Header } from "antd/es/layout/layout";
import { useState } from "react";
import { createSearchParams, useNavigate, useSearchParams } from "react-router-dom"
import image from "../../assests/images/image.png";
import {styles} from '../../assests/styles/HomePage'

const Cart=()=>{
    const [render, setrender] = useState(false)
    let flag=false
    const [search]=useSearchParams()
    const navigator=useNavigate()
    if(!search.get('id')){
        navigator('/')
        return;
    }
    const id=search.get('id')
    let cart=JSON.parse(localStorage.getItem('cart')) || null
    let userCart;
    if(cart){
        cart.forEach((x)=>{
            if(x.id===id){
                userCart=x.list
                if(userCart.length!==0){
                    flag=true;
                }
                return;
            }
        })
    }
    console.log(userCart)

    const remove=(e)=>{
        const list=userCart.filter((x)=>{
            return x.id!==parseInt(e.target.value)
        })
        userCart=list;
        cart.forEach((x)=>{
            console.log(x)
            if(x.id===id){
                x.list=userCart;
            }
        })
        localStorage.setItem('cart',JSON.stringify(cart))
        setrender(!render)
    }
    return(
        <>
            <Header style={styles.Header}>
                <Button  onClick={()=>navigator({pathname:'/',search:createSearchParams({id:id}).toString()})} style={styles.Button} size="medium">
                    Go Back
                </Button>
            </Header>
        
        {
            flag?
            <div value={render}>
            <br></br>
            {userCart.map((x)=>{
                return(
                    <>
                    <Card key={x.name} title={x.name} bordered={false} style={{ width:'100%',}}>
                        <p>{x.description}</p>
                        <p>{x.price}</p>
                        <button onClick={remove} value={x.id}>Remove from Cart</button>
                    </Card>
                    <br/>
                    </>
                )
            })}
            </div>
            :
            <Empty description={true} image={image} imageStyle={{height:'260px',marginTop:'10%'}} />
        }
        </>
    )
}
export default Cart