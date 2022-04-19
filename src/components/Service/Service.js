import React from 'react';
import { Card } from 'react-bootstrap';

const Service = () => {
    return (
        <div className='Service' id='services'>
           <h2 className='mt-5'>Why You Choose Me</h2>
       <div className="services container row gx-5 mx-auto">
      <div className="col-12 col-md-6 col-lg-4 col-xl-3 p-4">
      <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="Image/Services/service2.jpg" />
  <Card.Body>
    <Card.Title>Hospitality</Card.Title>
    <Card.Text>
     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum sit aspernatur molestias optio harum a quia dolores animi, fugiat provident dignissimos minima delectus hic nam vel fuga qui esse assumenda nesciunt voluptatem omnis! Odit repellat blanditiis, vitae officiis commodi eos cumque aspernatur modi minima incidunt?
    </Card.Text>
 </Card.Body>
  </Card> 
      </div>
  <div className="col-12 col-md-6 col-lg-4 col-xl-3 p-4">
  <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="Image/Services/service3.jpg" />
  <Card.Body>
    <Card.Title>Low Cost Travel</Card.Title>
    <Card.Text>
     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum sit aspernatur molestias optio harum a quia dolores animi, fugiat provident dignissimos minima delectus hic nam vel fuga qui esse assumenda nesciunt voluptatem omnis! Odit repellat blanditiis, vitae officiis commodi eos cumque aspernatur modi minima incidunt?
    </Card.Text>
 </Card.Body>
  </Card> 
  </div>
 <div className="col-12 col-md-6 col-lg-4 col-xl-3 p-4">
 <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="Image/Services/service4.jpg" />
  <Card.Body>
    <Card.Title>Traditional Food</Card.Title>
    <Card.Text>
     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum sit aspernatur molestias optio harum a quia dolores animi, fugiat provident dignissimos minima delectus hic nam vel fuga qui esse assumenda nesciunt voluptatem omnis! Odit repellat blanditiis, vitae officiis commodi eos cumque aspernatur modi minima incidunt?
    </Card.Text>
 </Card.Body>
  </Card> 
 </div>
 <div className="col-12 col-md-6 col-lg-4 col-xl-3 p-4">
 <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="Image/Services/service5.jpg" />
  <Card.Body>
    <Card.Title>Super Accommodation</Card.Title>
    <Card.Text>
     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum sit aspernatur molestias optio harum a quia dolores animi, fugiat provident dignissimos minima delectus hic nam vel fuga qui esse assumenda nesciunt voluptatem omnis! Odit repellat blanditiis, vitae officiis commodi eos cumque aspernatur modi minima incidunt?
    </Card.Text>
 </Card.Body>
  </Card> 
 </div>
       </div>
        </div>
    );
};

export default Service;