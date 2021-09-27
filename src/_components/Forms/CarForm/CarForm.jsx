import React, { createRef } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams
  } from "react-router-dom";
import { useEffect, useState } from 'react/cjs/react.development';
import { v4 as uuidv4 } from 'uuid';
import s from './CarForm.module.css'
import LocalStorageService from '../../../_services/LocalStorageServices/LocalStorageService';
import FormControl from '../../../_UI/FormControl/FormControl';

const CarForm = ({car, setCar, deleteCar}) => {
    
    let { id } = useParams();

    const [currentCar, setCurrentCar] = useState({
        brand: "",
        model: "",
        year: "",
        color: "",
        engine: "",
        price: "",
        img: "",
        description: ""
    });

    const regEx = {
        brand: /^[a-zA-Zа-яА-ЯёЁ -]{1,}$/,
        model: /^[a-zA-Zа-яА-ЯёЁ0-9 -]{1,}$/,
        color: /^[a-zA-Zа-яА-ЯёЁ -]{1,}$/,
        year: /^[0-9]{4}$/,
        engine: /^[0-9.,]{1,4}$/,
        price: /^[0-9]{1,8}$/,
        img: /^[\s\S]{1,}$/,
        description: /^[\s\S]{1,}$/
    }

    const errors = {
        brand: "Марка должна состоять из минимум одной буквы",
        model: "Модель должна состоять из минимум одной буквы",
        color: "Цвет должен состоять из минимум одной буквы",
        year: "Год должен состоять из 4 цифр",
        engine: "Объём должен состоять 1-4 цифр",
        price: "Цена должна состоять 1-8 цифр",
        img: "Вы не указали ссылку на изображение",
        description: "Описание обязательно",
    }

    const formInputs = {
        brandInp: createRef(),
        modelInp: createRef(),
        yearInp: createRef(),
        colorInp: createRef(),
        engineInp: createRef(),
        priceInp: createRef(),
        imgInp: createRef(),
        descriptionInp: createRef(),
    }

    useEffect(()=> {
        if(id){
            setCurrentCar(LocalStorageService.getCarById(id));
        }
    },[id])

    const validation = (car) => {
        for(let key in car){
            if( !regEx[key].test(car[key]) ){
                console.log(`${key}: Ошибка`);
                alert(errors[key])
                return false;
            }
        }

        return true;
    }

    const submit = (e) => {
        console.log(formInputs.brandInp.current.value)
        e.preventDefault();
        let newCar = {
            brand: formInputs.brandInp.current.value,
            model: formInputs.modelInp.current.value,
            year: formInputs.yearInp.current.value,
            color: formInputs.colorInp.current.value,
            engine: formInputs.engineInp.current.value,
            price: formInputs.priceInp.current.value,
            img: formInputs.imgInp.current.value,
            description: formInputs.descriptionInp.current.value
        };
        let isValid = validation(newCar);
        newCar.id = uuidv4();

        if(isValid === true && newCar.img !== ''){
            setCar(newCar);
        }
    }


    return (
            <form className={s.carForm}>
                <FormControl id="brand"
                             labelText="Марка"
                             defaultValue={currentCar.brand} 
                             refLink={formInputs.brandInp} 
                             type="text"/>

                <FormControl id="model"
                             labelText="Модель"
                             defaultValue={currentCar.model} 
                             refLink={formInputs.modelInp} 
                             type="text"/>

                <FormControl id="year"
                             labelText="Год Выпуска"
                             defaultValue={currentCar.year} 
                             refLink={formInputs.yearInp} 
                             type="number"/>

                <FormControl id="color"
                             labelText="Цвет"
                             defaultValue={currentCar.color} 
                             refLink={formInputs.colorInp} 
                             type="text"/>

                <FormControl id="engine"
                             labelText="Обьём двигателя в л"
                             defaultValue={currentCar.engine} 
                             refLink={formInputs.engineInp} 
                             type="number"/>

                <FormControl id="price"
                             labelText="Цена"
                             defaultValue={currentCar.price} 
                             refLink={formInputs.priceInp} 
                             type="number"/>

                <FormControl id="description"
                             labelText="Описание"
                             defaultValue={currentCar.description} 
                             refLink={formInputs.descriptionInp} 
                             type="textarea"/>

                <FormControl id="img"
                             labelText="Фото"
                             defaultValue={currentCar.img} 
                             refLink={formInputs.imgInp} 
                             type="text"
                             placeholder={`URL на фото`}/>

                <div className={s.formBtns}>
                    <input className={s.btn} onClick={submit} type="submit" value="Отправить"/> 
                    {id
                    ? <button className={s.btn} onClick={e=> deleteCar(e)}>Удалить</button>
                    : ''
                    }
                </div>
            </form>
    )
}

export default CarForm
