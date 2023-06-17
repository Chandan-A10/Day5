import { Layout } from "antd";
import { useLocation } from "react-router";
import { styles } from "../assests/styles/LoginSignin";
import LoginPage from '../pages/LoginPage'
import SignupPage from '../pages/SignupPage'
import {LoginContent} from '../pages/ContentPages/LoginContent'
import {SignUpContent} from '../pages/ContentPages/SignUpContent'
import {ProfileContent} from '../pages/ContentPages/ProfileContent'
import {Profile} from '../pages/ProfilePage'

const PageLayout=()=> {
    const {Sider,Content}=Layout
    const name=useLocation().pathname
    let contentComponent;
    let siderComponent;
    if(name==='/login'){
        contentComponent=<LoginPage/>
        siderComponent=<LoginContent/>
    }
    else if(name==='/signup'){
        contentComponent=<SignupPage/>
        siderComponent=<SignUpContent/>
    }
    else if(name==='/profile'){
        contentComponent=<Profile/>
        siderComponent=<ProfileContent/>
    }
    return (
        <>
        <Layout style={styles.Layout}>
            <Sider width='60%' style={styles.Sider}>
            {siderComponent}
            </Sider>
            <Content style={styles.Content}>
            {contentComponent}
            </Content>
        </Layout>
        </>
    );
}
export default PageLayout
