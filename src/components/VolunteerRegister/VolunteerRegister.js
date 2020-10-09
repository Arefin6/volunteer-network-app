import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router-dom';
import { userContext } from '../../App';
import volenLogo from '../../logos/Group 1329.png';


const VolunteerRegister = () => {
    const [registerDate,setRegisterDate] = useState(new Date());
    const[loggedInUser,setLoggedInUser] = useContext(userContext);
    const {name} = useParams();
    const history = useHistory();
    const { register, handleSubmit, watch, errors } = useForm();

     const onSubmit = data =>{
        const registerVolunteer = {register:data,registerTime:registerDate};

         fetch('http://localhost:5000/addMember',{
             method:'POST',
             headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body:JSON.stringify(registerVolunteer)
         })
         .then(res => res.json())
         .then(data=>{
             if(data){
                 history.push('/task');
             }
         }).catch(e => console.log(e))
     } 

    return (
    <div>
    <img src={volenLogo} alt="" className="logo"/>
     <div className="row container mt-5 p-4">
       <div className="offset-md-5 col-md-4 form-style">
           <h4 className="mb-4">Register As Volunteer</h4>
       <Form  onSubmit={handleSubmit(onSubmit)}>
        <Form.Group controlId="formGroupFullName">
        <Form.Control name="fullName" type="text" placeholder="Full Name" defaultValue={loggedInUser.name} ref={register({ required: true })} />
            {errors.fullName && <span className="error" >This field is required</span>}
        </Form.Group>
        <Form.Group controlId="formGroupEmail">
            <Form.Control name="email" type="email" placeholder="UserName or Email" defaultValue={loggedInUser.email} ref={register({ required: true })} />
            {errors.fullName && <span className="error" >This field is required</span>}
        </Form.Group>
        <Form.Group controlId="formGroupDate">
        <DatePicker  name="registerDate" className="datePick"  selected={registerDate} onChange={date => setRegisterDate(date)} style={{width:"300px"}} />
        </Form.Group>
        <Form.Group controlId="formGroupDescription">
        <Form.Control name="description" type="text" placeholder="Description" ref={register({ required: true })} />
            {errors.description && <span className="error" >This field is required</span>}
        </Form.Group>
        <Form.Group controlId="formGroupEventName">
            <Form.Control name="eventName" type="text" placeholder="Event" defaultValue={name} ref={register({ required: true })}/>
            {errors.eventName && <span className="error" >This field is required</span>}
        </Form.Group>
        <Form.Group>
            <Button type="submit" variant="primary" className="form-control">Register</Button>
        </Form.Group>
        </Form>

       </div>  
     
      </div>
   </div>
    );
};

export default VolunteerRegister;