import React, { useState } from "react";
import { Link } from "react-router-dom";
import AboutCarModal from "../Modals/AboutCarModal/AboutCarModal";
import s from "./CarItem.module.css";

const CarItem = ({ car }) => {
  let imgPath = require(`../../assets/images/${car.img}`).default;
  const [isShowModal, setIsShowModal] = useState(false);
  
  const toggleModal = ()=> {
    setIsShowModal(!isShowModal);
  }

  return (
    <div className={s.wraper}>
        {isShowModal
        ? <AboutCarModal car={car} toggleModal={toggleModal}/>
        : ''}
      <div className={s.item}>
        <div className={s.imgBlock}>
          <img src={imgPath} />
        </div>
        <div className={s.info}>
          <p>{car.brand} {car.model}</p>
          <p>Год: {car.year}</p>
          <p>Цена: {car.price}$</p>
          
          <button className={s.detailsBtn}  onClick={toggleModal}>Подробнее</button>
        </div>
      </div>
    </div>
  );
};
export default CarItem;
