import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import './Login.css'
// import { auth } from './firebase';

function Login() {
    // const history = useHistory();
    // const [email,setEmail] = useState('');
    // const [password,setPassword] = useState('');
    // const signIn = e =>{
    //     e.prevemtDefault()
    //     //some fancy firebase login shittt.........

    // }

    // const register = e=>{
    //     e.prevemtDefault();
    //     auth.createUserWithEmailAndPassword(email,password)
    //     .then((auth)=>{
    //         //if successfully created a new user with email and password
    //         console.log(auth);
           
    //     })
    //     .catch(error =>alert(error.message))

    // }
    //do some firebase register shittt................
  return (
    <div className='login'>
        <Link to ='/'>
        <img className='login__logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png'/>
        
        </Link>

        <div className='login__container'>
            <h1>
                Sign In 
            </h1>
            <form>
                <h5>
                    Email

                </h5>
                <input type="text" />
                <h5>
                    Password

                </h5>
                <input type="password" />
                <button type ='submit' className='login__signInButton'>
                    Sign In
                </button>
            </form>
                <p>
                    By Signing-in you agree to the amazon Fake
                    Clone Conditions of Use & sales. Please 
                    see our privacy Notice, our Cookies Notice and our 
                    Interest-Based Ads Notice.
                </p>
                <button className='login__registerButton'>
                    Create your amazon account
                </button>
                
        </div>
    </div>
  )
}

export default Login