import { Button, TextInput } from "nes-react";
import { useState } from 'react'
import { BsCheckLg } from "react-icons/bs";


export default function ButtonSection(){
    const [insertMode, setInsetMode] = useState(false)

    const handleAdd = () => {
        setInsetMode(true)
    }

    return (
        <>
            { !insertMode && <>
                <div className='buttons-section__add'>
                    <Button primary onClick={handleAdd}>Añadir</Button>
                </div>
            </>
            }
            { insertMode && <form>
                <TextInput className='input-text'/>
                <Button className='button-success' success><BsCheckLg className='icon'/></Button>
            </form>}
        </>
    )
}

