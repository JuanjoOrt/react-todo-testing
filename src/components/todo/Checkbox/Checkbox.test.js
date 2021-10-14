import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import {render, fireEvent} from '@testing-library/react'
import Checkbox from './Checkbox'

describe('<Checkbox />', () => {


    test('checkbox render', () => {
        render(<Checkbox />)
    })
})