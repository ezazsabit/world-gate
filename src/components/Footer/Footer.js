import React, { useEffect, useState } from 'react';
import './Footer.css'

const Footer = () => {
    const [date , setDate] = useState();

    const getYear = () =>  setDate(new Date().getFullYear())


    useEffect(() => {
        getYear();
    }, [])
    console.log(123);
    return (
        <div className='footer'>
            copyrightÂ©{date}bySabit
        </div>
    );
};

export default Footer;