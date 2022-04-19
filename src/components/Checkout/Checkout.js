import { Button } from 'react-bootstrap';
import React from 'react';
import { Form } from 'react-bootstrap';

const Checkout = () => {
    return (
        <div className='container w-50 mx-auto mb-5'>
            <h1>Welcome!!!</h1>
            <h5>You are ready to book your choice package!</h5>
            <h3>Provide Your Address:</h3>
            <form  action="">
         <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Your Name</Form.Label><br></br>
    {/* <input onBlur={handleNameBlur} className='m-2 py-2 border border-secondary'  type="text" placeholder="Enter your full name"/> */}
    <Form.Control required  type="text" placeholder="Enter your full name" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control required  type="email" placeholder="Enter email" />
    <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Address</Form.Label><br></br>
    {/* <input onBlur={handleNameBlur} className='m-2 py-2 border border-secondary'  type="text" placeholder="Enter your full name"/> */}
    <Form.Control required  type="text" placeholder="Give your address" className='py-5'/>
  </Form.Group>
   
  </Form.Group>

 
  <Button type="submit"  variant="dark" >
   Send Us
  </Button>
         </form>
        </div>
    );
};

export default Checkout;