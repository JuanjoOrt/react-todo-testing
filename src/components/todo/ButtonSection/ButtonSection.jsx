
import React, { useState } from 'react'
import { BsCheckLg } from "react-icons/bs";
import './styles.css'


export default function ButtonSection({handleNewTodo}){
    const [insertMode, setInsetMode] = useState(false)
    const [text, setText] = useState('')

    const handleAdd = () => {
        setInsetMode(true)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (text === '') return null

        setInsetMode(false)
        setText('')
        handleNewTodo(text)
    }

    const handleChangeInputText = (e) => {
        setText(e.target.value)
    }

    return (
        <>
            { !insertMode && <>
                <div className='buttons-section__add'>
                    <button className='button button-add' onClick={handleAdd}>Añadir</button>
                </div>
            </>
            }
            { insertMode && <form onSubmit={handleSubmit}>
                <input type='text' alt='new todo' className='input-text' onChange={handleChangeInputText} value={text}/>
                <button className='button button-success'><BsCheckLg className='icon'/></button>
            </form>}
        </>
    )
}

