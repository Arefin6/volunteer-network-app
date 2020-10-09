import React from 'react';
import { useHistory } from 'react-router-dom';
import './task.css';

const TaskList = (props) => {
    const{eventName} =props.list.register;
    const{registerTime,_id} =props.list;
    const history = useHistory();

     const handleDelete = (id) =>{
       fetch(`http://localhost:5000/delete/${id}`,{
           method:'DELETE'
       })
       .then(res => res.json())
       .then(result => {
           alert('activity Deleted');
           window.location.reload(true);
       })
     }

    return (
        <div className="col-md-5 container task-list">

               <img src={require(`../../images/${eventName}.png`)} alt="" className="image"/>  
             <div className="task-content">
             <h2 className="mb-3">{eventName}</h2>
            <h4 className="mb-4">{(new Date(registerTime).toDateString('dd/MM/yyyy'))}</h4>
             <button className="btn btn-danger" onClick={() => handleDelete(_id)}>Cancel</button>   
            </div>  
               
           
        </div>
         
    );
};

export default TaskList;