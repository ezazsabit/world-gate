import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialAuth from '../SocialAuth/SocialAuth';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const Signin = () => {
    const emailRef = useRef('');
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      const [sendPasswordResetEmail, sending,] = useSendPasswordResetEmail(
        auth
      );
      const resetPass=async () => {
        const email=emailRef.current.value;
        await sendPasswordResetEmail(email);
        toast('Sent email');
      }
      let location = useLocation();
      let from = location.state?.from?.pathname || "/";
      const navigate=useNavigate();
      const handlePassBlur=event=>{
        setPassword(event.target.value);
        // console.log(event.target.value)
    }
    const handleEmailBlur=event=>{
        setEmail(event.target.value);
        // console.log(event.target.value)
    }
    const handleUserSignIn=event=>
    {
        event.preventDefault();
        signInWithEmailAndPassword(email,password);
    }
    if(user){
        navigate(from, { replace: true });
    }
    if (loading) {
        return <p>Loading...</p>;
      }
    return (
        <div>
            <h1>Please Sign-in</h1>
            <div className="container w-50 mx-auto mb-5">
            <form onSubmit={handleUserSignIn}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control onBlur={handlePassBlur} type="password" placeholder="Password" />
  </Form.Group>
  <p style={{color:'red'}}>{error?.message}</p>
  <Button variant="dark" type="submit">
  Log-In
  </Button>
</form>
            </div>
            <p>New to World-Gate? <Link to='/signup' className='text-decoration-none'> <span className='text-danger'>Please Register</span></Link></p>
            <p>Forget Password? <span onClick={()=>resetPass()} className='text-decoration-none'> <span className='text-danger'>Reset Password</span></span></p>
          
          <SocialAuth></SocialAuth>
          <ToastContainer />
        </div>
    );
};

export default Signin;