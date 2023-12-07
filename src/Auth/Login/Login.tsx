import { FC } from 'react';
import Http from '../../Services/Http';
 


interface LoginProps { }

const Login: FC<LoginProps> = () => {

    const post = async()=>{
     try {
        let res =  Http({
            url:"/auth/login",
            method:'Post',
            data:{}
          })
          console.log(res)
     } catch (error) {
        
     }
    }
    return (
        <>
           login
        </>
    );
}

export default Login;