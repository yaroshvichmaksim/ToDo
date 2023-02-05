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
    create(addToDO);
    setToDo('');

  }

  return (


    <div class="container-fluid">

      <div class="col-md-4 offset-md-4">
        <div class="form-container">
          <h3 class="title">Todo</h3>
          <form class="form-horizontal">
            <div class="form-group">

              <Input
                class="form-control"
                type="text"
                placeholder="Добавить задачу"
                onChange={e => setToDo(e.target.value)}
                value={newToDo} />
            </div>
            <a onClick={AddNewToDo} class="btn btn-default">Добавить</a>
          </form>
        </div>
      </div>

    </div>

  )
}

export default ToDoForm;