import React from 'react';

const Blogs = () => {
    return (
        <div className=' d-flex flex-column justify-content-center'>
          <div className='mx-auto w-50 mb-5 text-start'>
          <h3> Difference between authorization and authentication?</h3>
         
          <p className='border border-dark ps-3 py-5'>
              Authentication is the process in which we can verify the user who want to interact with our site.Besides authorization is the process which comes after authentication.By this we can verify the components,routes etc. in which the user wants to enter or interact.For an example authentication is to determine the identity of a guest and authorization is to give something to the guest according to his choice.
          </p>
          </div>
          <div className='mx-auto w-50 mb-5 text-start'><h3> Why are you using firebase? What other options do you have to implement authentication?</h3>
          
          <p className='border border-dark ps-3 py-5'>
             In this milestone we mainly use firebase for authentication purpose,and we also use firebase slightly for hosting our website.Firebase is a third-party tool which helps us for authentication of the users.<br></br>
             <p>The other options for implementing authentication are Back4app ,Kuzzle,AWS Amplify,Octa,Auth Zero etc.</p>
          </p></div>
          <div className='mx-auto w-50 mb-5 text-start'>
          <h3> What other services does firebase provide other than authentication?</h3>
          
          <p className='border border-dark ps-3 py-5'>
          
             The other services firebase can do are-
             <ul type='disk'>
                 <li>Realtime Database</li>
                 <li>Strorage purpose</li>
                 <li>For hosting</li>
                 <li>Firestore Database</li>
                 <li>Machine Learning</li>
             </ul>
          </p>
          </div>
        

        </div>
    );
};

export default Blogs;