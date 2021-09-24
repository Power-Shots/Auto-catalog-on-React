import React, { createRef, useState, useEffect } from 'react';
import {withRouter} from 'react-router-dom';
import CarForm from '../../_components/Forms/CarForm/CarForm';
import LocalStorageService from '../../_services/LocalStorageServices/LocalStorageService';

const AddCarPage = (props) => {

    const [newCar, setNewCar] = useState({
        
    });

    useEffect(() => {
        addNewCar()
        
    }, [newCar]);

    const addNewCar = () => {
        if(newCar.id){
            LocalStorageService.addCar(newCar);
            props.history.push('/')
        }
    }

    

    return (
        <div className="add-car">
            <h2>Add new car</h2>
            <div className="wrapper">
                <CarForm setCar={setNewCar}/>
            </div>
        </div>
    )
}

export default AddCarPage
