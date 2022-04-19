import React from 'react';
import me from '../Aboutme/IMG_20220223_012356__01.jpg'

const Aboutme = () => {
    return (
        <div className='d-flex flex-column align-items-center'>
            <img src={me} alt="" />
      
            <h1>Hello There!!!</h1>
            <h5 className='text-start px-3'>I am Sabit.I have started this journey with all of you few months ago.Before beginning this course I haven't any knowledge about java script.I only had some primary knowledge about basic html and css.I dont have any knowledge about
            any framework.I was just a beginner.It was my dream to be a web developer.And look!!!now I make this site all by myself.Amazing!!Isn't it?All thanks to this course.I have enjoyed this course a lot.<br></br>
            As a student I obviously need some pocket money.That's why I want to get an internship after this course.For this I take a decision to rebuild my github account and linkedin after this course.Moreover,my first priority is not to get a job at this moment.I want to learn more.I want to be a perfect full-stack or MERN stack developer.It's my first priority at this moment.And for cherished my goal I will give my best into this course.<br></br>
             </h5>
             <h5 className="d-flex align-items-center">.......Thank you all...........</h5>
        </div>
    );
};

export default Aboutme;