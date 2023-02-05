
import React, { useState, useEffect } from 'react';
import GetService from '../API/GetService';
import ToDoForm from '../components/ToDoForm'
import ToDoList from '../components/ToDoList';
import '../styles/todolist.css';
import Input from '../UI/Input/Input';
import Select from '../UI/Select';

const ToDo = ({ removeAll }) => {
    const [todos, setTodos] = useState(localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : []);


    const list = JSON.parse(localStorage.getItem(localStorage.getItem('todos')));


    const createToDo = (addToDo) => {
        setTodos([...todos, addToDo]);

        localStorage.setItem('todos', JSON.stringify([...todos, addToDo]));

        console.log(localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [])

    }
    const deleteToDo = (toDo) => {

        const deleteTodo = todos.filter(p => p.id !== toDo.id);
        setTodos(deleteTodo);
        localStorage.setItem('todos', JSON.stringify(deleteTodo));


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

    async function response() {
        const user = await GetService.getAll();
        console.log(user);
    }

    useEffect(() => {
        response()
        console.log('asdasd');
    }, [])

    console.log(window.location.href);

    return (
        <div className="App">
            <div class="container">
                <div class="row">
                    <ToDoForm create={createToDo} removeAll={deleteAll}></ToDoForm>

                    <hr style={{ margin: '30px 0', color: "white" }} />
                    <div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <Select
                                value={selectedSort}
                                onChange={sortToDo}
                                defaultValue={'Сортировка по'}
                                options={[
                                    { value: 'body', text: 'По названию' },
                                    { value: 'id', text: 'По дате' },
                                ]}>
                            </Select>
                        </div>
                        <div class="col d-flex justify-content-end">
                        <a onClick={deleteAll} className="btn btn-primary btn-sm  clearAll" href="#" role="button">Очистить все</a>
                    </div>
                </div>
            </div>
            {todos.length
                ? <ToDoList remove={deleteToDo} todos={todos} title={'Список задач'}></ToDoList>
                : <p className='h1' style={{ color: 'black', textAlign: 'center', paddingTop: '30px' }}>У вас нет активных задач</p>
            }

        </div>
        </div >
    );


}
export default ToDo;