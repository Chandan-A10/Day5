import { Button, Form, Input,Card } from "antd";
import {LockOutlined,UserOutlined} from '@ant-design/icons'
import { createSearchParams, Link, useNavigate, useSearchParams } from "react-router-dom";

export const Profile=()=>{
    const [search]=useSearchParams()
    const navigator=useNavigate()
    const onFinish = (values) => {
        const id=search.get('id')
        const arr=JSON.parse(localStorage.getItem('userDetails'))
        const newArr=arr.map((x)=>{
            if(x.id.toString()===id){
                x.name=values.username
                x.password=values.password
            }
            return x;
        })
        localStorage.setItem('userDetails',JSON.stringify(newArr))
        navigator({pathname:'/',search:createSearchParams({id:id}).toString()})
        return;
    };
    return(
        <Card style={{border:'none'}} bodyStyle={{width:'70%'} }headStyle={{color:'#916CE2',fontSize:'28px',fontFamily:'Courier New'}} className="card" title='UPDATE USER'>
        <Form name="normal_login" className="login-form" initialValues={{remember: true,}} onFinish={onFinish}>
            <Form.Item name="username" rules={[{required: true,message: 'Invalid Username!'}]}>
                <Input className="input" prefix={<UserOutlined className="site-form-item-icon" />} placeholder="New Username" size="large" />
            </Form.Item>
            <Form.Item name="password" rules={[{required: true,message: 'Please input new password!'}]}>
                <Input className='input' prefix={<LockOutlined className="site-form-item-icon" />} size="large" type="password" placeholder="New Password"/>
            </Form.Item>
            <Form.Item className="btn">
                <Button type="primary" htmlType="submit" className="login-form-button" size="large">
                    Update
                </Button>
            </Form.Item>
            <Form.Item className="btn">
                    <Link to='/' > Back to Homepage</Link>
            </Form.Item>
        </Form>
        </Card>
    )
}