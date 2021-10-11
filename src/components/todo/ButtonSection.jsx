import { Button, TextInput } from "nes-react";
import { useState } from 'react'
import { BsCheckLg } from "react-icons/bs";


export default function ButtonSection({handleNewTodo}){
    const [insertMode, setInsetMode] = useState(false)
    const [text, setText] = useState('')

    const handleAdd = () => {
        setInsetMode(true)
    }

    const handleSubmit = (e) => {
        if (text === '') return null
        e.preventDefault()
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
                    <Button primary onClick={handleAdd}>Añadir</Button>
                </div>
            </>
            }
            { insertMode && <form onSubmit={handleSubmit}>
                <TextInput className='input-text' onChange={handleChangeInputText} value={text}/>
                <Button className='button-success' success><BsCheckLg className='icon'/></Button>
            </form>}
        </>
    )
}

