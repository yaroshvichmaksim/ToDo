import React, { useState } from "react";
import Input from "../UI/Input/Input";

const ToDoForm = ({ create, removeAll }) => {
  const [newToDo, setToDo] = useState('');

  const AddNewToDo = (e) => {
    e.preventDefault();
    const addToDO = {
      id: Date.now().toString(),
      title: "ToDo",
      body: newToDo

    }
    console.log(addToDO.id)
    const date = new Date(addToDO.id);
    console.log(date.getFullYear().toString() + " " + date.getDate().toString() + " " + date.getMonth().toString() + 1 + " " + date.getHours().toString() + ":" + date.getMinutes().toString());
    //setTodos([...todos, addToDO]);
    create(addToDO);
    setToDo('');
    
   // addToDO = JSON.parse(localStorage.getItem("ToDo"));
    //console.log(addToDo);
  }

  return (
    <form>
      <div>
        <Input
          type="text"
          placeholder="Добавить задачу"
          onChange={e => setToDo(e.target.value)}
          value={newToDo} />
        <a style={{ width: '49%', marginTop: '10px' }} onClick={AddNewToDo} className="btn btn-primary btn-sm " href="#" role="button">Добавить задачу</a>
        <a style={{ float: 'right', width: '49%', marginTop: '10px' }} onClick={removeAll} className="btn btn-primary btn-sm " href="#" role="button">Очистить все</a>
      </div>
    </form>
  )
}

export default ToDoForm;