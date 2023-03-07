import Button from 'react-bootstrap/Button';
import React, { useState } from 'react'
import { Card } from 'react-bootstrap'
import "./Team.css"


const Team = ({user,add}) => {
  let [show,setshow] = useState("")
    let {name,Position,updatedAt,Image,email} = user.attributes;
    let showemail =()=>{
      if(show==""){
        setshow(email)
      }else{
        setshow("")
      }
    }
    
    let update = updatedAt.slice(0,10)
    
    
  return (
    <Card className='user'>
         <Card.Img variant="top" src={Image} className='userimg'/>
        <Card.Body>
          <Card.Title>Name:{name}</Card.Title>
          <Card.Text>
           Position: {Position}
          <p>
        Email:  {show}
            </p>  
          </Card.Text>
          <Card.Text className='d-flex gap-3'>
        <button type='btn' className='btn bg-info' onClick={showemail}> {show?"remove":"show"}</button>
        <button type='btn' className='btn bg-dark text-light' onClick={()=>add(user.attributes)}>add card</button>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">{update}</small>
        </Card.Footer>
    </Card>
  )
}

export default Team
