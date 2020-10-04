import React from 'react';
import './Activity.css';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Activity = (props) => {
    const{name,img} = props.activity;
    const imgStyle ={
        width:"250px",
        height:"200px"
    }
    return (
<div className="col-md-3">
 <Card>
  <Card.Body className="">
       <img src={require(`../../images/${img}`)} alt=""
       style={imgStyle}
       />   
  </Card.Body>
   <Card.Footer className="bg-danger text-center">
   <Link to={`/register/${name}`} className="link-main">{name}</Link>
   </Card.Footer>
 </Card>
</div>      
           
        
    );
};

export default Activity;