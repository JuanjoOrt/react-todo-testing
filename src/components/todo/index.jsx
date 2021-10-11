import { useState } from 'react'
import { Container, Checkbox } from "nes-react";
import './todo.css'
import ButtonSection from './ButtonSection';

export default function TodoContainer(){
    const [list, setList] = useState({})

    return (
        <main>
            <Container rounded title='List' className='todo-container'>
                <Checkbox label='Esto es una prueba de checkbox'/>
                <Checkbox label='Esto es una prueba de checkbox'/>
                <Checkbox label='Esto es una prueba de checkbox'/>
            </Container>
            <ButtonSection />
        </main>
    
    )
}