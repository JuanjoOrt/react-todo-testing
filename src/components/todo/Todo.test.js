import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import {render, fireEvent} from '@testing-library/react'
import TodoContainer from '.'


describe('<TodoContainer />', () => {
    const {container} = render(<TodoContainer />)

    test('Check render' , () => {
        expect(container.querySelector('.todo-container')).toBeInTheDocument()
    })
})

