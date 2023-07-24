import React, { useState } from 'react';
import { AiOutlineClose } from "react-icons/ai";

export default function Task( {date, text, deleteTask}) {

    const[activeStatus,setActiveStatus] = useState(false);

    
    const handleClick = () => {
        setActiveStatus(!activeStatus)
      
    }
     

  return (
    <div className={`taskCont ${activeStatus && "statusDone"}`} 
    
    onClick={handleClick}    
    style={{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-around",
        padding:"20px",
        margin:"auto 5px",
        cursor:'pointer',
    }}>
        <div>{date}</div>
        <div style={{
            flexGrow:"1",
            margin:"auto 20px"
        }}>{text}</div>
        <AiOutlineClose style={{
            cursor:"crosshair"
            }} 
            onClick={deleteTask}
            />

    </div>
  )
}
