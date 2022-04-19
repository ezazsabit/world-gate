import { Button } from 'bootstrap';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import usePackage from '../../CustomHooks/usePackage/usePackage';


const PackageDetail = () => {
    let params = useParams();
    // const [packages,setPackage]=usePackage();
// console.log(packages);
const data=[
    {
    
      picture: "Image/Package/package1.jpg",
      placename: "Rangamati",
      description: "Culpa consectetur elit ad laboris aute consequat qui sint qui irure. Dolore esse tempor dolore in. Aliqua mollit est nostrud nulla aute cillum do sint laboris cupidatat. Ullamco eiusmod in aliquip dolor esse in aliquip aliqua ad veniam ea consequat consequat enim. Laborum proident labore aute dolore amet excepteur velit laboris. Fugiat culpa fugiat deserunt labore excepteur adipisicing consectetur. Commodo in aliqua aute ipsum cillum veniam eiusmod velit Lorem dolore sit minim labore exercitation.\r\n"
    },
    {
      
     picture: "Image/Package/package2.jpg",
      placename: "Cox's Bazar",
      description: "Qui sint laboris ipsum deserunt non elit eiusmod. Laborum incididunt anim anim ut labore cupidatat nulla deserunt. Nulla ut nulla commodo cupidatat nostrud enim culpa in duis duis sit dolore aliqua sit. Do in quis enim dolore commodo minim. Enim culpa velit sit veniam non veniam nulla.\r\n"
    },
    {
     
      picture: "Image/Package/package3.jpeg",
      placename:" Bandarban",
      description: "Cillum aliqua cupidatat amet elit et. Consectetur Lorem ex ex ullamco sunt et officia. Commodo do elit occaecat proident velit consectetur voluptate excepteur tempor mollit officia minim do cillum.\r\n"
    },
    {
      
      picture: "Image/Package/package4.jpg",
      placename: "Sundarban",
      description: "Nulla ipsum anim eiusmod fugiat reprehenderit dolor exercitation quis magna incididunt. Ullamco quis ipsum anim minim do proident nisi. Excepteur in mollit ea in ipsum ut consequat nulla ullamco. Nulla irure ea aliqua officia reprehenderit minim duis eiusmod magna excepteur. Esse laboris elit qui fugiat magna exercitation cupidatat enim amet voluptate. Laboris irure aute labore consectetur veniam quis occaecat nulla laboris.\r\n"
    },
    {
      
      picture: "Image/Package/package5.jpg",
      placename: "Jaflong",
      description: "Ea esse ullamco nostrud duis dolor consequat. Est consequat veniam dolore nulla et cillum voluptate. Ullamco duis Lorem cupidatat eu commodo sunt incididunt id. Veniam laboris do esse quis ad laboris esse proident duis tempor minim laboris commodo eu. Consectetur mollit mollit do duis velit in excepteur exercitation sunt tempor amet.\r\n"
    },
    {
     
      picture: "Image/Package/package6.jpeg",
      placename: "Moynamoti",
      description: "Sit elit proident cupidatat consequat dolor qui aute quis. Ullamco pariatur nulla id sint voluptate ullamco aliquip fugiat proident amet Lorem aliquip anim deserunt. Cupidatat ea reprehenderit dolor sunt labore officia occaecat magna tempor nisi reprehenderit consectetur esse occaecat. Adipisicing officia eu elit ullamco ipsum magna minim ad officia Lorem id. Occaecat labore duis excepteur minim aliquip velit adipisicing cupidatat veniam culpa adipisicing ea proident. Esse incididunt ea duis proident. Duis ullamco tempor duis do consequat.\r\n"
    }
  ]
  const searchData=data.filter(searched=>searched.placename===params.searchPackage)
  console.log(searchData);



    return (
        <div>
       <h1>
      {searchData[0].placename}
       </h1>
       <img src={searchData[0].picture} alt="" />
       <p>{searchData[0].description}</p>
        
        <Link  to='/checkout' className="btn btn-dark mb-5">Book Now</Link>
        </div>
    );
};

export default PackageDetail;