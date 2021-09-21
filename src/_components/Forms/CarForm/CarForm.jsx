import React, { createRef } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams
  } from "react-router-dom";
import { useState } from 'react/cjs/react.development';
import { v4 as uuidv4 } from 'uuid';
import carData from '../../../dataBase/CarsData';

const CarForm = ({car, setCar, deleteCar}) => {
    
    let { id } = useParams();
    console.log(`car form ${id}`)

    const [currentCar, setCurrentCar] = useState(
        id
        ? carData.filter(item => item.id === id)
        : {brand: '', year: '', price: '', img: ''}
    )

    const regEx = {
        brand: /^[a-zA-Z -]{1,}$/,
        year: /^[0-9]{4}$/,
        price: /^[0-9]{1,8}$/,
    }

    const formInputs = {
        brandInp: createRef(),
        yearInp: createRef(),
        priceInp: createRef(),
        imgInp: createRef(),
    }

    const validation = (car) => {
        for(let key in car){
            if( !regEx[key].test(car[key]) ){
                console.log(`${key}: Ошибка`)
                return false;
            }
        }

        return true;
    }

    const submit = (e) => {
        e.preventDefault()
        let newCar = {
            brand: formInputs.brandInp.current.value,
            year: formInputs.yearInp.current.value,
            price: formInputs.priceInp.current.value,
        }
        let isValid = validation(newCar);
        newCar.img = formInputs.imgInp.current.value.replace(/^.*\\/, "");
        newCar.id = uuidv4()

        if(isValid === true){
            setCar(newCar);
        }
    }


    return (
        <div>
            <form>
                    <div className="form-control">
                        <label htmlFor="brand">Марка: </label>
                        <input defaultValue={currentCar.brand} ref={formInputs.brandInp} type="text"/>
                    </div>
                    <div className="form-control">
                        <label htmlFor="year">Год: </label>
                        <input defaultValue={currentCar.year} ref={formInputs.yearInp} type="text"/>
                    </div>
                    <div className="form-control">
                        <label htmlFor="price">Цена: </label>
                        <input defaultValue={currentCar.price} ref={formInputs.priceInp} type="text"/>
                    </div>
                    <div className="form-control">
                        <label htmlFor="img">Фото: </label>
                        <input defaultValue={currentCar.img} ref={formInputs.imgInp} type="file"/>
                    </div>
                    <div className="form-control">
                        <input onClick={submit} type="submit" value="Отправить"/> 
                        {id
                        ? <button onClick={e=> deleteCar(e)}>Удалить</button>
                        : ''
                        }
                    </div>

                </form>
        </div>
    )
}

export default CarForm
