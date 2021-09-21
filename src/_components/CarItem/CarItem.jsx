import React from 'react'
import { Link } from 'react-router-dom';
import s from './CarItem.module.css'

const CarItem = ({car}) => {
    let imgPath = require(`../../assets/images/${car.img}`).default;

    return (
        <div className={s.item}>
            <div className={s.imgBlock}>
                <img src={imgPath}/>
            </div>
            <div className={s.info}>
                <p>{car.brand}</p>
                <p>Год: {car.year}</p>
                <p>Цена: {car.price}$</p>
                <Link className={s.editBtn} to={`/edit-car/${car.id}`}>Редактировать</Link>
            </div>
        </div>
    )
}

export default CarItem;
