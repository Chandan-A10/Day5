import { Radio,Button, Form, Input,Card } from "antd";
import {LockOutlined,UserOutlined} from '@ant-design/icons'
import { Link, createSearchParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import '../../assests/styles/layout.css'
import { setUserLocalStorage } from "../../utils/setUserLocalStorage";

const SignUp=()=>{
    const navigate=useNavigate()
    const [value, setValue] = useState(2);
    const onFinish = (values) => {
        const x=setUserLocalStorage(values,value)
        navigate({pathname:'/',search:createSearchParams({id:x}).toString()})
    };
    const onChange=(e)=>{
        setValue(e.target.value)
        console.log(value)
    }
    return(
        <Card style={{border:'none'}} bodyStyle={{width:'70%'} }headStyle={{color:'#916CE2',fontSize:'30px',fontFamily:'Courier New'}} className="card" title='Create Account'>
        <Form name="normal_login" className="login-form" initialValues={{remember: true,}} onFinish={onFinish}>
            <Form.Item name="username" rules={[{required: true,message: 'Please Enter Username!'}]}>
                <Input className="input" prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Enter Username" size="medium" />
                
            </Form.Item>
            <Form.Item name="password" rules={[{required: true,message: 'Please input valid Password!'}]}>
                <Input className='input' prefix={<LockOutlined className="site-form-item-icon" />} size="medium" type="password" placeholder="Enter Password"/>
            </Form.Item>
            <Form.Item name="confirmpassword" rules={[{required: true,message: 'Please confirm your password!'},({getFieldValue})=>({validator(_, value){if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error("password didn't match!"));
            },})]}>
                <Input className='input' prefix={<LockOutlined className="site-form-item-icon" />} size="medium" type="password" placeholder="Confirm Password"/>
            </Form.Item>
            <Radio.Group style={{marginLeft:'12%'}} onChange={onChange} value={value}>
                <Radio value={1}>Admin</Radio>
                <Radio value={2}>User</Radio>
                <Radio value={3}>VIP</Radio>
                </Radio.Group>
            <Form.Item className="btn">
                <Button type="primary" htmlType="submit" className="login-form-button" size="large">
                    Create
                </Button>
            </Form.Item>
            <Form.Item className="btn">
                    <Link to='/login' style={{marginLeft:'2.5%'}} > OR login account!</Link>
            </Form.Item>
        </Form>
        </Card>
    )
}
export default SignUp