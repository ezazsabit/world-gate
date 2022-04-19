import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import SocialAuth from './SocialAuth/SocialAuth';

const Signup = () => {
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    // const[confirmpassword,setConfirmPassword]=useState('');
    const[error,setError]=useState();
    const[name,setName]=useState();
    const handleEmailBlur=event=>{
        setEmail(event.target.value);
        // console.log(event.target.value)
    }
    
    const handleNameBlur=event=>{
        setName(event.target.value);
        // console.log(event.target.value)
    }
    const handlePassBlur=event=>{
        setPassword(event.target.value);
        // console.log(event.target.value)
    }
    // const handleConfirmPassBlur=event=>{
    //     setConfirmPassword(event);
    //     console.log(event.target.value)
    // }
    const [
        createUserWithEmailAndPassword,
        user
    
       
      ] = useCreateUserWithEmailAndPassword(auth);
      const navigate=useNavigate();
      if(user){
     navigate('/home')
      }
    const handleCreateUser=event=>{
        event.preventDefault();
        console.log('ashche')
        console.log(email)
        console.log(password)
        // if(password!== confirmpassword){
        //     setError('Your two password are not same')
        //     return;
        // }
       createUserWithEmailAndPassword(email, password)
    }
   
     
    return (
        <div>
          <h1>Please Register</h1>
            <div className="container w-50 mx-auto mb-5">
            
         <form onSubmit={handleCreateUser} action="">
         <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Your Name</Form.Label><br></br>
    {/* <input onBlur={handleNameBlur} className='m-2 py-2 border border-secondary'  type="text" placeholder="Enter your full name"/> */}
    <Form.Control required onBlur={handleNameBlur} type="text" placeholder="Enter your full name" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control required onBlur={handleEmailBlur} type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control required onBlur={handlePassBlur} type="password" placeholder="Password" />
  </Form.Group>
  {/* <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Confirm Password</Form.Label>
    <Form.Control required onBlur={handleConfirmPassBlur} type="password" placeholder="Confirm Password" />
  </Form.Group> */}
  {/* <p style={{color:'red'}}>{error}</p> */}
  <Button type="submit"  variant="dark" >
    Register
  </Button>
         </form>

            </div>
            <p>Already have an account? <Link to='/signin' className='text-decoration-none'> <span className='text-danger'>Please Log-in</span></Link></p>
          
          <SocialAuth></SocialAuth>
        </div>
    )};

export default Signup;