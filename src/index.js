import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Task from './components/Task';
import './components/index.css'

function R21App () {

    const[values,setValues] = useState({
        datetime: "",
        text: "",
    }) 

    let tasks = [{
        date:"",
        type:""
    }]

    const [tasksList,setTasksList] = useState(tasks)

    const handleAdd  = () => {
        setTasksList([...tasksList,{date: values.datetime, type:values.text}])
    }

    const deleteTask = (e) => {
        window.confirm("Delete this Task?") && e.target.parentElement.remove();
    }




    return (
        <div className='wrapper'>
            <div className='containerMain'>
                <div className='containerUpper'>
                    <div>Date</div>
                    <div className='containerUpperTask'>Task</div>
                </div>
                <div className="containerMiddle">
                    <input type="date" onChange={(e)=>setValues({...values,datetime:e.target.value})} />
                    <input type="text" onChange={(e)=>setValues({...values,text:e.target.value})} />
                    <button onClick={handleAdd}>+ Add</button>
                </div>
                <div className="containerList">
                    {tasksList.date === " " ? null : tasksList.map((element,index) => <Task date={element.date} text={element.type} key={index} deleteTask={deleteTask}/>)}
                </div>
            </div>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<R21App />)