import React, { useEffect, useState } from 'react';
import PackageItem from './PackageItem';



const Package = () => {
    const [packages,setPackages]=useState([]);
useEffect(()=>{
    fetch('customdata.json')
    .then(res=>res.json())
    .then(data=>setPackages(data))
},[])
// console.log(packages)
    return (
        <div>
            <h1 className='mt-5'>My Services</h1>
            {
                packages.map(packageItem => <PackageItem key={packageItem._id} packageItem={packageItem}/>
            )
            
            }
          
        </div>
    );
};

export default Package;