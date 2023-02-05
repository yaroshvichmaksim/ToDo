import React from "react";
import ToDoListItem from "./ToDoListItem";

const ToDoList = ({todos, title, remove}) =>  {
    return (
        <div className="listshow">
        <h1 style={{ textAlign: 'center', fontFamily:'Bradley', color :'white', background:'rgba(0,0,0,0.3)', marginTop:'50px', display:'block' ,marginLeft:'auto', marginRight:'auto', borderRadius:'5px'}}>{title}</h1>
      {
        todos.map((todo) => 
            <ToDoListItem remove={remove} props={todo} key={todo.id}></ToDoListItem>
            
        )
    }   
    </div>
    )
    
}
export default ToDoList;