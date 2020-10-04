import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import volenLogo from '../../logos/Group 1329.png';


const VolunteerRegister = () => {
    const [registerDate,setRegisterDate] = useState(new Date());
    return (
    <div>
    <img src={volenLogo} alt="" className="logo"/>
     <div className="row container mt-5 p-4">
       <div className="offset-md-5 col-md-4 form-style">
           <h4 className="mb-4">Register As Volunteer</h4>
       <Form>
        <Form.Group controlId="formGroupFullName">
            <Form.Control type="text" placeholder="Full Name" />
        </Form.Group>
        <Form.Group controlId="formGroupEmail">
            <Form.Control type="email" placeholder="UserName or Email" />
        </Form.Group>
        <Form.Group controlId="formGroupDate">
        <DatePicker className="datePick" selected={registerDate} onChange={date => setRegisterDate(date)} style={{width:"300px"}} />
        </Form.Group>
        <Form.Group controlId="formGroupDescription">
        <Form.Control type="text" placeholder="Description" />
        </Form.Group>
        <Form.Group controlId="formGroupEventName">
            <Form.Control type="text" placeholder="Event" />
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