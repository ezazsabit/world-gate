import React, { useEffect, useState } from 'react';
import './Footer.css'

const Footer = () => {
    const [date , setDate] = useState();

    const getYear = () =>  setDate(new Date().getFullYear())


    useEffect(() => {
        getYear();
    }, [])
    return (
        <div className='footer'>
            copyright©{date}bySabit
        </div>
    );
};

export default Footer;