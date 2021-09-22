import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const MySelect = (props) => {

    return (
        <select value={props.selectedCategory[props.id]}
                onChange={e=> props.setSelectedCategory({...props.selectedCategory, [props.id]: e.target.value})}
                id={props.id}>

            {props.options.map(item => 
                <option key={uuidv4()} value={item}>{item}</option>    
            )}
        </select>
    )
}

export default MySelect
