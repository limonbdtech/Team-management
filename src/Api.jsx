import React, { useState,useEffect } from 'react'
import Team from './Team'
import "./App.css";
import Show from './Show';

let Api = () => {
    let [data,setdata] = useState([])
    let [addteam,setaddteam] = useState([])
    let [remove,setremove] = useState(0)
   useEffect(() => {
      fetch("http://localhost:1337/api/teams")
      .then(response=>response.json())
      .then(text=>setdata(text.data))
      .catch(error=>console.log(error))
    }, [])

    let add =(value)=>{

      
      if(addteam.includes(value)){

        setaddteam([...addteam])
      }else{
        setaddteam( [...addteam,value])
      }
    }
    let setid =(id)=>{
      console.log(id)
    
      setaddteam( addteam.filter((item)=> id !== item.uid))
      
      
    }

    console.log(addteam)

    return (
      <section>
      

     {addteam.length > 0?<Show show={addteam} setid={setid} />:""}  
      
      

    <div className=' groupdata'>
       {data.map((item,index)=> <Team key={index} user={item} add={add}/>)}
    </div>
    </section>
      
  )
}

export default  Api;