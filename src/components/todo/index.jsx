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
                {list.map((todoItem, index) =>
                    <div  key={index}>
                        <input type={'checkbox'} /> 
                        <span>{todoItem}</span>
                    </div>)}
            </div>
            <ButtonSection handleNewTodo={handleNewTodo}/>
        </main>
    
    )
}