import React from 'react';
import error from './error.png'

const Error = () => {
    return (
        <div>
            <h3>404 Error!!!...Bad Request</h3>
            <img className='img-fluid ' src={error} alt="" />
        </div>
    );
};

export default Error;