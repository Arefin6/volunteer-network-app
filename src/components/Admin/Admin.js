import React, { useEffect, useState } from 'react';
import brandLogo from '../../logos/Group 1329.png';
import peopleLogo from '../../logos/users-alt 1.png';
import './Admin.css';

const Admin = () => {
    
    const [members,setMembers] = useState([]);
    
    
    useEffect(()=>{
          fetch('http://localhost:5000/admin/allMembers')
          .then(res =>res.json())
          .then(data => setMembers(data))
    },[])


    const userlogo ={
        width:"40px",
        marginRight:"20px", 
        filter: "brightness(0.7)contrast(3.6)hue-rotate(217deg)saturate(9.9)"
    }

    return (
        <div>
            <div className="row content-wraper">
                <div className="col-md-4  sidebar ">
                   <img src={brandLogo} alt="" className="mt-3 mb-4" style={{width:"220px"}}/>
                    <div>
                    <a href="#" className="volenteer-list-link" ><img src={peopleLogo}  alt="" style={userlogo}/>
                    Volunteer register list
                   </a>
                </div>
                  
                </div>
                <div className="container col-md-7 offset-md-1 list-wraper">
                    <h5 className="mb-3">Volunteer List</h5>

                        <table class="table amdinTable">
                        <thead class="thead-light">
                            <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Email Id</th>
                            <th scope="col">Register Date</th>
                            <th scope="col">Volunteer List</th>
                            </tr>
                        </thead>
                        <tbody>

                        {
                             
                        members.map(member =>
                            
                             <tr>
                                <td>{member.register.fullName}</td>

                                <td>{member.register.email}</td>

                                 <td>{(new Date(member.registerTime).toDateString('dd/MM/yyyy'))}</td>
                                
                                <td>{member.register.eventName}</td>
                                
                            </tr>   
                            

                           
                            )    
                        }

                            
                            
                        </tbody>
                        </table> 
                </div>

            </div>
        </div>
    );
};

export default Admin;