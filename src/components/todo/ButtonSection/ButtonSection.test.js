import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import {render, fireEvent} from '@testing-library/react'
import ButtonSection from './ButtonSection'


describe('<ButtonSection />', () => {

    test('Exist button add', () => {
        const component = render(<ButtonSection />)
        const addButton = component.getByText('Añadir')
        expect(addButton).toBeInTheDocument()
    })

    test('When click add button, input appear', () => {
        const component = render(<ButtonSection />)
        const addButton = component.getByText('Añadir')
        fireEvent.click(addButton)
        const inputText = component.getByAltText('new todo')
        expect(inputText).toBeInTheDocument()  
    })

    test('When click add button, check button appear', () => {
        const component = render(<ButtonSection />)
        const addButton = component.getByText('Añadir')
        fireEvent.click(addButton)
        const checkButton = component.container.querySelector('.button-success')
        expect(checkButton).toBeInTheDocument()  
    })
    
})