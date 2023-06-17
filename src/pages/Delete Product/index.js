import { Button, Card, Empty } from "antd"
import { Header } from "antd/es/layout/layout";
import {styles} from '../../assests/styles/HomePage'
import { createSearchParams, useNavigate, useSearchParams } from "react-router-dom"
import image from "../../assests/images/image.png";
import { useState } from "react";

const DeletePage=()=>{
    const [search]=useSearchParams()
    const [flag, setflag] = useState(false)
    const id=search.get('id')
    const navigator=useNavigate()
    const products=JSON.parse(localStorage.getItem('products')) || []
    const remove=(e)=>{
        const newProducts=products.filter((x)=>{
            return x.id!==parseInt(e.target.value)
        })
        console.log(newProducts)
        localStorage.setItem('products',JSON.stringify(newProducts))
        setflag(!flag)
    }
    return(
        <>
        <Header style={styles.Header}>
            <Button  onClick={()=>navigator({pathname:'/',search:createSearchParams({id:id}).toString()})} style={styles.Button} size="medium">
                Go Back
            </Button>
        </Header>
        <br/>
        <div value={flag}>
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
                        <button onClick={remove} value={x.id}>Remove</button>
                        </Card>
                        </>
                    )
                })
            }
            </>
            :
            <Empty description={true} image={image} imageStyle={{height:'260px',marginTop:'10%'}} />
        }
        </div>
        </>   
    )
}
export default DeletePage