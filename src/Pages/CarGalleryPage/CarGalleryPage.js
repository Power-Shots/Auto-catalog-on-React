import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import s from './CarGalleryPage.module.css';
import carData from '../../dataBase/CarsData';
import CarsList from '../../_components/CarsList/CarsList';
import Filter from '../../_components/Filter/Filter';
import { useEffect } from 'react/cjs/react.development';



const CarGalleryPage = () => {
    
    const [carsList, setCarsList] = useState(carData);
    const [selectedCategory, setSelectedCategory] = useState({
      brand: "All",
      year: "All",
    });

    useEffect(()=> {
      applyFilter()
    }, [selectedCategory])

    const applyFilter = () => {
        let preparatoryArr = [];
    
        for (let i = 0; i < carData.length; i++) {
          let isValid = true;
          for (let key in selectedCategory) {
            if (
              selectedCategory[key] !== "All" &&
              selectedCategory[key].toLowerCase() !== carData[i][key].toLowerCase()
            ) {
                isValid = false;
            }
          }
    
          if(isValid === true){
              preparatoryArr.push(carData[i])
          }
        }
    
        setCarsList(preparatoryArr)
      };


    return (
        <div className="home">
           <div className={s.wrapper}>
                <Filter key={uuidv4()}
                selectedCategory={selectedCategory} 
                setSelectedCategory={setSelectedCategory}/>

                <div className="cars-gallery">
                    {carsList.length===0
                     ?<h1>Нет результатов</h1>
                     :<CarsList key={uuidv4()} carsArr={carsList}/>
                    }
                </div>
            </div> 
        </div>
    )
}

export default CarGalleryPage
