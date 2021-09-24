import React from 'react';
import s from './FormControl.module.css';

const FormControl = ({id, labelText, defaultValue, refLink, type}) => {
    return (
        <div className={s.formControl}>
            <label htmlFor={id}>{labelText}</label>
            {type === 'textarea'
            ? <textarea defaultValue={defaultValue} ref={refLink}/>
            : <input defaultValue={defaultValue} ref={refLink} type={type}/>
            }
            
        </div>
    )
}

export default FormControl
