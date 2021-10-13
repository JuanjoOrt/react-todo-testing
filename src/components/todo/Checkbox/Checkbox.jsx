import React from 'react'
import './styles.css'


export default function Checkbox({label, value, onChange}){
   

    return (
        <div className='checkbox'>
            <input type={'checkbox'} checked={value} onChange={(e) => 
                                                        onChange({value: e.target.checked, label})}
            /> 
            <span className='checkbox-label'>{label}</span>
        </div>
    )
}