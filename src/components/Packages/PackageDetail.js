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
      description: "Rangamati is the most popular destination in the Chittagong Hill Tracts for Bangladeshi visitors, who come to enjoy the scenic splendour of Kaptai Lake, the country’s largest artificial lake, which was created in 1960 for hydroelectricity. The lake, dotted with islands, is unquestionably beautiful, and a boat trip across it is a fantastic way to spend a day out here, but it’s worth knowing that approximately 100,000 Adivasis – mostly Chakma – were displaced when it was created, and around 40% of the land they previously cultivated was submerged forever."
    },
    {
      
     picture: "Image/Package/package2.jpg",
      placename: "Cox's Bazar",
      description: "Cox's Bazar – named for an 18th-century British East India Company captain – is a place dear to most Bangladeshis' hearts. As everyone you meet will tell you, it's the longest continual natural beach on the planet (a whopping 125km), and the place where the country likes to come to relax."
    },
    {
     
      picture: "Image/Package/package3.jpeg",
      placename:" Bandarban",
      description: "Bandarban  (chittagong division) area 4479.03 sq km, located in between 21°11' and 22°22' north latitudes and in between 92°04' and 92°41' east longitudes. It is bounded by rangamati district on the north, Arakan (Myanmar) on the south, Chin Province (Myanmar) and Rangamati district on the east, chittagong and cox's bazar district on the west. Marmiana Tang, Bathil Tang, Kewkradang, Langfi Tang, Lakpang Tang, Thaingkiang Tang, Moudak Tang, Murangiang Tang, Rungrang Tang, Naprai Tang, Murifa Tang, Busi Tang, and Sara Tang are the notable hills of this district.Population Total 298120; male 162133, female 135987; Muslim 147072, Hindu 10796, Buddhist 28546, Christian 103997 and others 7719. Indigenous community such as marma, chakma, bawm, Murong, Tripura, khyang, khumee, and lushei belong to this upazila."
    },
    {
      
      picture: "Image/Package/package4.jpg",
      placename: "Sundarban",
      description:  "Sundarbans, The largest single block of tidal halophytic mangrove forest in the world, located in the southwestern part of Bangladesh. It lies on the Ganges-Brahmaputra Delta at the point where it merges with the bay of bengal. The forest lies a little south to the Tropic of Cancer between the latitudes 21°30'N and 22°30'N, and longitudes 89°00'E and 89°55'E. With its array of trees and wildlife the forest is a showpiece of natural history. It is also a centre of economic activities, such as extraction of timber, fishing and collection of honey. The forest consists of about 200 islands, separated by about 400 interconnected tidal rivers, creeks and canals."
    },
    {
      
      picture: "Image/Package/package5.jpg",
      placename: "Jaflong",
      description:  "Jaflong is a hill station and tourist destination in the Division of Sylhet, Bangladesh. It is located in Gowainghat Upazila of Sylhet District and situated at the border between Bangladesh and the Indian state of Meghalaya, overshadowed by subtropical mountains and rainforests."
    },
    {
     
      picture: "Image/Package/package6.jpeg",
      placename: "Moynamoti",
      description:  "Moinamoti is an isolated low, dimpled range of hills, dotted with more than 50 ancient Buddhist settlements dating between the 8th and 12th century CE. It was part of the ancient Tripura division of Bengal. It extends through the centre of the district of Comilla in Bangladesh."
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