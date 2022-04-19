import { useEffect, useState } from "react";

const usePackage=()=>{
    const [packages,setPackages]=useState([]);
    useEffect(()=>{
        fetch('/customdata.json')
        .then(res=>{res.json()
        console.log(res)})
        .then(data=>setPackages(data))
    },[])
    console.log(packages)
  
 return [packages,setPackages];
 
}
export default usePackage;