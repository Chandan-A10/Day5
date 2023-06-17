import { Button,Layout } from 'antd'
import {styles} from '../../assests/styles/HomePage'
import { createSearchParams, useNavigate, useSearchParams } from 'react-router-dom'
import Products from '../../Components/displayProducts'

const HomePage=()=>{
    const {Header}=Layout
    let user;
    const [search]=useSearchParams()
    const id=search.get('id')
    if(id){
        JSON.parse(localStorage.getItem('userDetails')).forEach((x)=>{
            if(parseInt(id)===x.id){
                console.log(x)
                user=x.role;
            }
        })
    }
    const navigator=useNavigate()
    return(
        <Layout className="Homelayout" style={styles.Layout}>
            <Header style={styles.Header}>
                { ( id ) ?
                    <>
                    <Button  onClick={()=>navigator('/')} style={styles.Button} size="medium">
                        Logout
                    </Button>
                    <Button onClick={()=>navigator({pathname:'/profile',search:createSearchParams({id:id}).toString()} )} style={styles.Button} size="medium">
                        Profile
                    </Button>
                    </>
                    :
                    <>
                    <Button  onClick={()=>navigator('/login')} style={styles.Button} size="medium">
                        Log in
                    </Button>
                    <Button onClick={()=>navigator('/signup')} style={styles.Button} size="medium">
                        Sign Up
                    </Button>
                    </>
                }
                {user===1 && (
                <>
                <Button onClick={()=>navigator({pathname:'/add',search:createSearchParams({id:id}).toString()} )} style={styles.Button} size="medium">
                    Add Product
                </Button>
                <Button onClick={()=>navigator({pathname:'/delete',search:createSearchParams({id:id}).toString()} )} style={styles.Button} size="medium">
                    Delete product
                </Button>
                </>
                )}
                {user===3 && (
                <>
                <Button onClick={()=>navigator({pathname:'/add',search:createSearchParams({id:id}).toString()} )} style={styles.Button} size="medium">
                    Add Product
                </Button>
                </>
                )}
                {user===2 && (
                <>
                <Button onClick={()=>navigator({pathname:'/cart',search:createSearchParams({id:id}).toString()} )} style={styles.Button} size="medium">
                    My Cart
                </Button>
                </>
                )}
            </Header>
            <br/>
            <Products role={user} id={id}></Products>
        </Layout>
    )
}
export default HomePage