import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";
import {withRouter} from 'react-router-dom';
import carData from '../../dataBase/CarsData';
import CarForm from '../../_components/Forms/CarForm/CarForm';

const EditCarPage = (props) => {
    let { id } = useParams();

    const [currentCar, setCurrentCar] = useState(carData.filter(item => item.id === id));

    useEffect(()=> {
        if(currentCar.id){
            editCar()        }
    }, [currentCar])

    const deleteCar = (e) => {
        e.preventDefault();
        
        let index= carData.findIndex(item => item.id === id);
        carData.splice(index,1);
        props.history.push('/')
    }

    const editCar = (e) => {
        let index = carData.findIndex(item => item.id === id);
        carData[index] = currentCar;
        props.history.push('/');
    }

    return (
        <div>
           <h2>Edit car</h2>
            <div className="wrapper">
                <CarForm car={currentCar} setCar={setCurrentCar} deleteCar={deleteCar}/>
            </div> 
        </div>
    )
}

export default EditCarPage;
