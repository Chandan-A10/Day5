import { Card, Empty } from "antd"
import image from "../assests/images/image.png";

const Products=(props)=>{
    const products=JSON.parse(localStorage.getItem('products')) || []
    const addtoCart=(e)=>{
        let producttoadd;
        products.forEach((x)=>{
            if(x.id===parseInt(e.target.value)){
                producttoadd=x;
                return
            }
        })
        let cart=JSON.parse(localStorage.getItem('cart')) || []
        let flag=true
        if(cart.length!==0){
            cart.forEach((x)=>{
                console.log(x.id===props.id)
                if(x.id===props.id){
                    x.list=[...x.list,producttoadd]
                    localStorage.setItem('cart',JSON.stringify(cart))
                    flag=false;
                    return
                }
            })
        }
        if(flag){
            const obj={
                id:props.id,
                list:[producttoadd]
            }
            cart.push(obj)
            localStorage.setItem('cart',JSON.stringify(cart))
        }
        document.getElementById(e.target.value)?.removeAttribute('hidden')
        document.getElementsByClassName(e.target.value)[0]?.setAttribute('hidden','hidden')
    }
    return(
        <>
        {
            products.length ?
            <>
            {
                products.map((x)=>{
                    return(
                        <>
                        <br/>
                        <Card title={x.name} bordered={false} style={{ width:'100%',}}>
                        <p>{x.description}</p>
                        <p>{x.price}</p>
                        {props.role===2 ?<>
                        <p id={x.id} hidden>Added to cart</p>
                        <button className={x.id } onClick={addtoCart} value={x.id}>Add to Cart</button>
                        </>
                    :<></>    
                    }
                        </Card>
                        </>
                    )
                })
            }
            </>
            :
            <Empty description={true} image={image} imageStyle={{height:'260px',marginTop:'10%'}} />
        }
        </>
    )
}
export default Products