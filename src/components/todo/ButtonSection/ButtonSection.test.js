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

    test('Check if input text is already writted', () => {
        const component = render(<ButtonSection />)
        const addButton = component.getByText('Añadir')
        fireEvent.click(addButton)
        const inputText = component.getByAltText('new todo')
        fireEvent.change(inputText, {target: {value: 'esto es una prueba de texto'}})
        expect(inputText.value).toBe('esto es una prueba de texto')
    })

    test('Check if input text can be empty', () => {
        const component = render(<ButtonSection />)
        const addButton = component.getByText('Añadir')
        fireEvent.click(addButton)
        const inputText = component.getByAltText('new todo')
        fireEvent.change(inputText, {target: {value: 'esto es una prueba de texto'}})
        fireEvent.change(inputText, {target: {value: ''}})
        expect(inputText.value).toBe('')
    })

    test('Check enter submit new todo', () => {
        const mockHandler = jest.fn();
        const component = render(<ButtonSection handleNewTodo={mockHandler}/>)
        const addButton = component.getByText('Añadir')
        fireEvent.click(addButton)
        const inputText = component.getByAltText('new todo')
        fireEvent.change(inputText, {target: {value: 'esto es un nuevo todo'}})
        fireEvent.submit(inputText)
        expect(mockHandler).toHaveBeenCalledTimes(1)
        expect(mockHandler.mock.calls[0][0]).toBe('esto es un nuevo todo')
    })

    test('Check click button submit new todo', () => {
        const mockHandler = jest.fn();
        const component = render(<ButtonSection handleNewTodo={mockHandler}/>)
        const addButton = component.getByText('Añadir')
        fireEvent.click(addButton)
        const inputText = component.getByAltText('new todo')
        fireEvent.change(inputText, {target: {value: 'esto es un nuevo todo'}})
        const checkButton = component.container.querySelector('.button-success')
        fireEvent.click(checkButton)
        expect(mockHandler).toHaveBeenCalledTimes(1)
        expect(mockHandler.mock.calls[0][0]).toBe('esto es un nuevo todo')
    })
    
    
})