import React from "react";

const ToDoListItem = (todos) =>{
  const Month1 = ["", "января ", "февраля ", "марта ", "апреля ", "мая ", "июня ", "июля ", 
  "августа ", "сентября ", "октября ", "ноября ", "декабря "];
  console.log(todos.props.id);
  
  const date = new Date(parseInt(todos.props.id));  
  console.log(date);  
 const month = Month1[parseInt(date.getMonth()+1)].toString();
 console.log(month);
  const toDoDate =(date.getDate().toString() + " "+ month + " " + date.getFullYear().toString() + " " + date.getHours().toString() + ":" + date.getMinutes().toString());
console.log(toDoDate);
    console.log(todos);
    return(
        <div className='ToDoList'>
        <div className='ToDoList_Content'>
          <strong>{toDoDate}</strong>
          <div>
            {todos.props.body}
          </div>
        </div>
          <a onClick={()=> todos.remove(todos.props)} className="btn btn-primary btn-sm btn-list" href="#" role="button">Удалить</a>
      </div>
    )
}

export default ToDoListItem;