import { Button, Form, Input } from "antd"
import { Header } from "antd/es/layout/layout";
import {styles} from '../../assests/styles/HomePage'
import { createSearchParams, useNavigate, useSearchParams } from "react-router-dom"

const AddPage=()=>{
    const [search]=useSearchParams()
    const id=search.get('id')
    const navigator=useNavigate()
    let products=JSON.parse(localStorage.getItem('products')) || []


    const onFinish=(values)=>{
        document.getElementById('add')?.removeAttribute('hidden')
        setTimeout(()=>{document.getElementById('add').setAttribute('hidden','hidden')},1000)
        let obj=values
        obj.id=Date.now()
        products.push(obj)
        localStorage.setItem('products',JSON.stringify(products))
    }
    
    return(
        <>
        <Header style={styles.Header}>
            <Button  onClick={()=>navigator({pathname:'/',search:createSearchParams({id:id}).toString()})} style={styles.Button} size="medium">
                Go Back
            </Button>
        </Header>
        <br></br>
        <h3 id="add" hidden> Product Added Successfully</h3>
        <div className="addProduct">
        <Form name="normal_login" onFinish={onFinish}>

                <Form.Item name="name" rules={[{required: true,message: 'Please enter product name!'}]}>
                    <Input className="input" placeholder="Enter Product name" size="large"  autoComplete="off"/>
                </Form.Item>

                <Form.Item name="description" rules={[{required: true,message: 'product desc is required!'}]}>
                    <Input  className="input" placeholder="Enter Product Description" size="large" autoComplete="off" />
                </Form.Item>

                <Form.Item name="price" rules={[{required: true,message: 'Set the product price!'}]}>
                    <Input className="input" type="number" placeholder="Enter Product Price" size="large" autoComplete="off"/>
                </Form.Item>

                <Form.Item className="btn">
                    <Button type="primary" htmlType="submit" className="login-form-button" size="large">
                        Add Product
                    </Button>
                </Form.Item>
            </Form>
        </div>
        </>
    )
}
export default AddPage