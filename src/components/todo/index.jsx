import React,{ useState } from 'react'
import './todo.css'
import ButtonSection from './ButtonSection/ButtonSection';
import Checkbox from './Checkbox/Checkbox'

export default function TodoContainer(){
    const [list, setList] = useState({})

    const handleNewTodo = (text) => {
        setList({...list, [text]: false})
    }

    const handleCheckbox = ({label, value}) => {
        setList({...list, [label]: value})
    }

    return (
        <main>
            <div className='todo-container'>
                {Object.keys(list).map((listKey, index) =>  
                    <Checkbox key={index} label={listKey} value={list[listKey]} onChange={handleCheckbox}/>
                )}
            </div>
            <ButtonSection handleNewTodo={handleNewTodo}/>
        </main>
    
    )
}