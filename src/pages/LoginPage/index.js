import { Button, Form, Input,Card } from "antd";
import {LockOutlined,UserOutlined} from '@ant-design/icons'
import { Link, createSearchParams, useNavigate } from "react-router-dom";
import { getUserLocalStorage } from "../../utils/getUserLocalStorage";
import '../../assests/styles/layout.css'

const LoginPage=()=>{
    const navigate=useNavigate()

    const handleChange=()=>{
        document.getElementById('error')?.setAttribute('hidden','hidden')
    }

    const onFinish=async(values)=>{
        const x=await getUserLocalStorage(values)
        console.log(x)
        if(x){navigate({pathname:'/',search:createSearchParams({id:x.id}).toString()})}
        else{document.getElementById('error')?.removeAttribute('hidden')}
    };

    return(
        <>
        <Card style={{border:'none'}} bodyStyle={{width:'70%'} }headStyle={{color:'#916CE2',fontSize:'30px',fontFamily:'Courier New'}} className="card" title='USER LOGIN'>
            <p id='error' style={{color:'red'}} hidden>No valid user found :(</p>

            <Form name="normal_login" className="login-form" initialValues={{remember: true,}} onFinish={onFinish}>
                
                <Form.Item name="username" rules={[{required: true,message: 'Invalid Username!'}]}>
                    <Input onChange={handleChange} className="input" prefix={<UserOutlined className="site-form-item-icon" />} autoComplete="off" placeholder="Username" size="large" />
                </Form.Item>
                
                <Form.Item name="password" rules={[{required: true,message: 'password cannot be blank!'}]}>
                    <Input onChange={handleChange} className='input' prefix={<LockOutlined className="site-form-item-icon" />} size="large" type="password" placeholder="Password"/>
                </Form.Item>
                
                <Form.Item className="btn">
                    <Button type="primary" htmlType="submit" className="login-form-button" size="large">
                        Log in
                    </Button>
                </Form.Item>
                
                <Form.Item className="btn">
                    <Link to='/signup'> OR register now!</Link>
                </Form.Item>
            
            </Form>
        </Card>
        </>
    )
}
export default LoginPage