import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import {render, fireEvent} from '@testing-library/react'
import Checkbox from './Checkbox'

describe('<Checkbox />', () => {

    test('Render', () => {
        render(<Checkbox />)
    })

    test('Prop label', () => {
        const component = render(<Checkbox label={'texto de prueba'}/>)
        const label = component.getByText('texto de prueba')
        expect(label).toBeInTheDocument()
    })

    test('Prop value', () => {
        const component = render(<Checkbox value={true}/>)
        const input = component.getByLabelText('checkbox-input')
        expect(input.checked).toBe(true)
    })

    test('Prop onChange', () => {
        const mockHandler = jest.fn()
        const component = render(<Checkbox onChange={mockHandler}/>)
        const input = component.getByLabelText('checkbox-input')
        fireEvent.click(input)
        expect(mockHandler).toHaveBeenCalledTimes(1)
    })

    test('line throught on', () => {
        const component = render(<Checkbox value={true} label='texto de prueba'/>)
        const label = component.getByText('texto de prueba')
        expect(label.classList.contains('checked')).toBe(true)
    })

    test('line throught off', () => {
        const component = render(<Checkbox value={false} label='texto de prueba'/>)
        const label = component.getByText('texto de prueba')
        expect(label.classList.contains('un-checked')).toBe(true)
    })
})