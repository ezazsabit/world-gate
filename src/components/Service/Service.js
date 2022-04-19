import React from 'react';
import { Card } from 'react-bootstrap';

const Service = () => {
    return (
        <div className='Service' id='services'>
           <h2 className='mt-5'>Why You Choose Me</h2>
       <div className="services container row gx-5 mx-auto">
      <div className="col-12 col-md-6 col-lg-4 col-xl-3 p-4 " >
      <Card style={{ width: '18rem' ,height: '450px' }}>
  <Card.Img variant="top" src="Image/Services/service2.jpg" />
  <Card.Body>
    <Card.Title>Hospitality</Card.Title>
    <Card.Text>
    You will get the best hospitality in my hostage.Hospitality is our culture in Bangladesh.And I asure you that you will get best of it from me.
    </Card.Text>
 </Card.Body>
  </Card> 
      </div>
  <div className="col-12 col-md-6 col-lg-4 col-xl-3 p-4 " >
  <Card style={{ width: '18rem' ,height: '450px' }}>
  <Card.Img variant="top" src="Image/Services/service3.jpg" />
  <Card.Body>
    <Card.Title>Low Cost Travel</Card.Title>
    <Card.Text>
     Budget friendly travel travel is so popular now a days.The travelling is more enjoyable if the cost is friendly.I will guide you all that routes in which you will get your full satisfaction with low of cost!!!
    </Card.Text>
 </Card.Body>
  </Card> 
  </div>
 <div className="col-12 col-md-6 col-lg-4 col-xl-3 p-4 " >
 <Card style={{ width: '18rem',height: '450px'  }}>
  <Card.Img variant="top" src="Image/Services/service4.jpg" />
  <Card.Body>
    <Card.Title>Traditional Food</Card.Title>
    <Card.Text>
    I will introduce you with different kinds of local traditional food and guide you to all those spot in which you will get the best food at cheap rate!!
    </Card.Text>
 </Card.Body>
  </Card> 
 </div>
 <div className="col-12 col-md-6 col-lg-4 col-xl-3 p-4 " >
 <Card  style={{ width: '18rem',height: '450px' }}>
  <Card.Img variant="top" src="Image/Services/service5.jpg" />
  <Card.Body>
    <Card.Title>Super Accommodation</Card.Title>
    <Card.Text>
    You will get super accomodation in a super cool place where the scenery in eye soothing ,you will feel the actual refreshment in the cool breeze where you will find the another meaning of living in this beautiful world!!!
    </Card.Text>
 </Card.Body>
  </Card> 
 </div>
       </div>
        </div>
    );
};

export default Service;