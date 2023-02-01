import React from "react";
import ToDoListItem from "./ToDoListItem";

const ToDoList = ({todos, title, remove}) =>  {
    return (
        <div className="listshow">
        <h1 style={{ textAlign: 'center' }}>{title}</h1>
      {
        todos.map((todo) => 
            <ToDoListItem remove={remove} props={todo} key={todo.id}></ToDoListItem>
            
        )
    }
    </div>
    )
    
}
export default ToDoList;