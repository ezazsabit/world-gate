import React from 'react';
import { Link } from 'react-router-dom';
import Package from '../Packages/Package';
import Service from '../Service/Service';
import './Home.css'

const Home = () => {
    return (
        <div>
            <div className='Banner'>
            
            <img className='bannerImage img-fluid' src="Image/Banner photo/Banner3.jpg" alt="" /> 
           <div className="siteName">
           <h1>World-Gate</h1>
            <h3>Welcome to Bangladesh</h3>
            <Link to="/aboutme" className='aboutMeLink btn btn-light'>
              About Me
            </Link>
           </div>
            
        </div>
        <Service></Service>
        <Package></Package>
        </div>
    );
};

export default Home;