import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";
import {withRouter} from 'react-router-dom';
import CarForm from '../../_components/Forms/CarForm/CarForm';
import LocalStorageService from '../../_services/LocalStorageServices/LocalStorageService';

const EditCarPage = (props) => {
    let { id } = useParams();

    const [currentCar, setCurrentCar] = useState({});

    useEffect(()=> document.title = 'Редактировать машину', [])

    useEffect(()=> {
        if(currentCar.id){
            editCar()        
        }
    }, [currentCar])

    const deleteCar = (e) => {
        e.preventDefault();
        const isDelete = window.confirm(`Удалить?`);
        
        if(isDelete){
            LocalStorageService.deleteCarById(id)
            props.history.push('/')
        } 
    }

    const editCar = (e) => {
        LocalStorageService.editCar(id, currentCar);
        props.history.push('/');
    }

    return (
        <div>
           <h2>Edit car</h2>
            <div className="wrapper">
                <CarForm setCar={setCurrentCar} deleteCar={deleteCar}/>
            </div> 
        </div>
    )
}

export default EditCarPage;
