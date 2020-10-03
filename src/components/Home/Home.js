import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import HomeNvigation from '../Home Navigation/HomeNvigation';
import Search from '../Home Navigation/Search/Search';
import img1 from '../../images/animalShelter.png';

const Home = () => {
    const[activities,setActivities] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/activity')
        .then(res => res.json())
        .then(data => setActivities(data));

    },[])  

    return (
        <div>
            <HomeNvigation></HomeNvigation>
            <Search></Search>
             <div className="row" style={{marginBottom:".5rem"}}>
                 
             {
                activities.map(activity => <Activity activity={activity}></Activity>)
            }

             </div>
           
             
        </div>
    );
};

export default Home;