import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes} from '@fortawesome/free-solid-svg-icons';
import s from './AboutCarModal.module.css';
import { useEffect } from 'react/cjs/react.development';
import { Link } from 'react-router-dom';

const AboutCarModal = ({car, toggleModal}) => {
    let imgPath = require(`../../../assets/images/${car.img}`).default;
    console.log(car)
    

    
    
    return (
        <div className={s.modalWraper} >
            <div className={s.cover} onClick={toggleModal}></div>
            <div className={s.modalWindow}>
                <button className={s.closeModalBtn} onClick={toggleModal}>
                    <span>
                        <FontAwesomeIcon icon={faTimes}/>
                    </span>
                </button>
                <div className={s.aboutCarInfo}>
                    <div className={s.imgBlock}>
                       <img src={imgPath}/>
                    </div>
                    <div className={s.info}>
                        <ul className={s.shortInfo}>
                            <li>Марка: <span>{car.brand}</span></li>
                            <li>Модель: <span>{car.model}</span></li>
                            <li>Год выпуска: <span>{car.year}</span></li>
                            <li>Цвет: <span>{car.color}</span></li>
                            <li>Обьём двигателя: <span>{car.engine}л</span></li>
                            <li>Цена: <span>{car.price}$</span></li>
                        </ul>
                    </div>
                </div>

                <div className={s.description}>
                    <p>
                        {car.description}
                    </p>
                </div>

                <div className={s.btsBlock}>
                <Link className={s.editBtn} to={`/edit-car/${car.id}`}>
                    Редактировать
                </Link>
                </div>
            </div>
        </div>
    )
}

export default AboutCarModal;
