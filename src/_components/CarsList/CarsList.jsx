import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import s from './CarsList.module.css'
import CarItem from '../CarItem/CarItem';

const CarsList = ({carsArr}) => {
    return (
        <div className={s.gallery}>
            {carsArr.map(car => 
                <CarItem key={uuidv4()} car={car}/>
            )}
        </div>
    )
}

export default CarsList
