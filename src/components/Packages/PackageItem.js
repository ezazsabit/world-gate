import { Button } from 'bootstrap';
import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PackageDetail from './PackageDetail';

const PackageItem = ({packageItem}) => {
  const {placename,description,picture,price} = packageItem;
  
 
    return (
        <div className='w-100 mb-5'>
          <img src={picture} alt="package" className='w-100 img-fluid h-50' />
         <Card className="text-center">
  
  <Card.Body>
    <Card.Title>{placename}</Card.Title>
    <Card.Text>
     {description.slice(0,100)+'...'}
    </Card.Text>
    <h5>Price: {price}</h5>
    <Link to={`/packagedetail/${placename}`}  className="btn btn-dark">See More</Link>
  </Card.Body>
 
</Card>
        </div>
    );
};

export default PackageItem;