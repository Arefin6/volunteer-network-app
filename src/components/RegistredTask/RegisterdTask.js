import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../App';
import HomeNvigation from '../Home Navigation/HomeNvigation';
import TaskList from '../TaskList/TaskList';

const RegisterdTask = () => {

     const[registerData,setRegisterData] = useState([]);
     const [loggedInUser,setLoggedInUser] = useContext(userContext);
     useEffect(() =>{
        fetch('http://localhost:5000/allMembers?email='+loggedInUser.email,{
            headers:{
             'Content-Type': 'application/json',
         }
        })
        .then(res => res.json())
        .then(data => setRegisterData(data));    
     },[]) 

     
      
      
    return (
        <div>
            <HomeNvigation></HomeNvigation>
             
             <div className="row mt-4">
             {
               registerData.map(list => <TaskList list={list}></TaskList>)
             }

             </div>

            

        </div>
    );
};

export default RegisterdTask;