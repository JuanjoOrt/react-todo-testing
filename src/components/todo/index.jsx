import React,{ useState } from 'react'
import './todo.css'
import ButtonSection from './ButtonSection';

export default function TodoContainer(){
    const [list, setList] = useState([])

    const handleNewTodo = (text) => {
        setList([...list, text])
    }

    return (
        <main>
            <div rounded title='List' className='todo-container'>
                {list.map((todoItem, index) => <div key={index} label={todoItem}/>)}
            </div>
            <ButtonSection handleNewTodo={handleNewTodo}/>
        </main>
    
    )
}