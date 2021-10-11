import { useState } from 'react'
import { Container, Checkbox } from "nes-react";
import './todo.css'
import ButtonSection from './ButtonSection';

export default function TodoContainer(){
    const [list, setList] = useState([])

    const handleNewTodo = (text) => {
        setList([...list, text])
    }

    return (
        <main>
            <Container rounded title='List' className='todo-container'>
                {console.log(list)}
                {list.map((todoItem, index) => <Checkbox key={index} label={todoItem}/>)}
            </Container>
            <ButtonSection handleNewTodo={handleNewTodo}/>
        </main>
    
    )
}