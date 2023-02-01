import React, { useState, useEffect } from 'react';
import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList';
import './styles/todolist.css'
import Input from './UI/Input/Input';
import Select from './UI/Select';

function App() {

  var todo1 = [];
  const [todos, setTodos] = useState(localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : []);
  console.log(todos);

  const list = JSON.parse(localStorage.getItem(localStorage.getItem('todos')));
  console.log(list);

  const createToDo = (addToDo) => {

    console.log(addToDo);
    todo1 = todos;
    setTodos([...todo1, addToDo]);

    console.log(todo1);
    localStorage.setItem('todos', JSON.stringify(todo1));
    console.log(todos);
    console.log(localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [])
    setTimeout(1000);


    console.log(todos);
  }
  const deleteToDo = (toDo) => {

    todo1 = todos;
    console.log(todo1);
    setTodos(todo1.filter(p => p.id !== toDo.id));
    localStorage.setItem('todos', JSON.stringify(todo1));


  }

  const deleteAll = (toDo) => {
    setTodos(todos.filter(p => p.id === 0));
    localStorage.clear();
  }

  const [selectedSort, setSelectedSort] = useState('');

  const sortToDo = (sort) => {
    console.log(sort);
    setSelectedSort(sort);
    console.log(selectedSort);
    setTodos([...todos].sort((a, b) => a[sort].localeCompare(b[sort])))
    //setTodos([sort].sort());
    console.log(sort);
  }

  return (
    <div className="App">
      <ToDoForm create={createToDo} removeAll={deleteAll}></ToDoForm>
      <hr style={{ margin: '30px 0', color: "white" }} />
      <Select
        value={selectedSort}
        onChange={sortToDo}
        defaultValue={'Сортировка по'}
        options={[
          { value: 'body', text: 'По названию' },
          { value: 'id', text: 'По дате' },
        ]}>
      </Select>
      {todos.length
        ? <ToDoList remove={deleteToDo} todos={todos} title={'Список задач'}></ToDoList>
        : <p className='h1' style={{ color: 'white', textAlign: 'center', paddingTop: '30px' }}>У вас нет активных задач</p>
      }

    </div>
  );
}

export default App;