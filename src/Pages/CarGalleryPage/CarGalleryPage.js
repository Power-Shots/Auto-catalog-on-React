import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import s from './CarGalleryPage.module.css';
import CarsList from '../../_components/CarsList/CarsList';
import Filter from '../../_components/Filter/Filter';
import { useEffect } from 'react/cjs/react.development';
import LocalStorageService from '../../_services/LocalStorageServices/LocalStorageService';
import SortService from '../../_services/SortService/SortService';



const CarGalleryPage = () => {
    
    const carsList = LocalStorageService.getAllCars();
    const [filtredCarsList, setFiltredCarsList] = useState(LocalStorageService.getAllCars())
    const [selectedCategory, setSelectedCategory] = useState(
      {
        brand: "All",
        year: "All",
        color: "All",
        engine: "All",
      });
      
    const [sortedBy, setSortedBy] = useState({value:'brand', key:'brand', reverse: false})
    
    useEffect(()=> {
      applyFilter()
    }, [selectedCategory, sortedBy])

    const applyFilter = () => {
        let preparatoryArr = [];
    
        for (let i = 0; i < carsList.length; i++) {
          let isValid = true;
          for (let key in selectedCategory) {
            if (
              selectedCategory[key] !== "All" &&
              selectedCategory[key].toLowerCase() !== carsList[i][key].toLowerCase()
            ) {
                isValid = false;
            }
          }
    
          if(isValid === true){
              preparatoryArr.push(carsList[i])
          }
        }
        
        preparatoryArr = SortService.sortObjs(preparatoryArr, sortedBy.key, sortedBy.reverse);

        setFiltredCarsList(preparatoryArr)
      };


    return (
        <div className="home">
           <div className={s.wrapper}>
                <Filter key={uuidv4()}
                sortedBy={sortedBy}
                setSortedBy={setSortedBy}
                selectedCategory={selectedCategory} 
                setSelectedCategory={setSelectedCategory}/>

                <div className="cars-gallery">
                    {filtredCarsList.length===0
                     ?<h1>Нет результатов</h1>
                     :<CarsList key={uuidv4()} carsArr={filtredCarsList}/>
                    }
                </div>
            </div> 
        </div>
    )
}

export default CarGalleryPage
