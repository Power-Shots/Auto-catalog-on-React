import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import s from './CarGalleryPage.module.css';
import CarsList from '../../_components/CarsList/CarsList';
import Filter from '../../_components/Filter/Filter';
import { useEffect } from 'react/cjs/react.development';
import LocalStorageService from '../../_services/LocalStorageServices/LocalStorageService';
import SortService from '../../_services/SortService/SortService';
import PriceSlider from '../../_components/PriceSlider/PriceSlider';




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
      
    const [sortedBy, setSortedBy] = useState({value:'brand', key:'brand', reverse: false});
    const [priceValue, setPriceValue] = useState({
      currentPrice: {min: 0, max: 100},
      defaultPrice: {min: 0, max: 100}
    });

    useEffect(()=> {
      
      getMaxPrice();
    }, []);
    
    useEffect(()=> {
      applyFilter();
    }, [selectedCategory, sortedBy, priceValue])

    const getMaxPrice = () => {
      console.log('popopoiiug')
      let priceArr = [];
      for(let i=0; i<carsList.length; i++){
        priceArr.push(carsList[i].price);
      }

      setPriceValue({ 
       currentPrice: {min: Math.min(...priceArr), max: Math.max(...priceArr) },
       defaultPrice: {min: 0, max: Math.max(...priceArr) }
      });
    }

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

          
          if(carsList[i].price< priceValue.currentPrice.min
            || carsList[i].price>priceValue.currentPrice.max ){
              isValid = false;
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
            <div>
              <Filter key={uuidv4()}
                  sortedBy={sortedBy}
                  setSortedBy={setSortedBy}
                  selectedCategory={selectedCategory} 
                  setSelectedCategory={setSelectedCategory}/>

              <PriceSlider
                currentPrice={priceValue.currentPrice}
                price={priceValue}
                setPrice={setPriceValue}
                maxDefaultValue={priceValue.defaultPrice.max}
              />
            </div>

            <div className="cars-gallery">
                {filtredCarsList.length===0
                  ?<h2>Нет результатов</h2>
                  :<CarsList key={uuidv4()} carsArr={filtredCarsList}/>
                }
            </div>

          </div> 
        </div>
    )
}

export default CarGalleryPage
