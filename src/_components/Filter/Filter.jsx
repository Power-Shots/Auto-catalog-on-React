import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import MySelect from "../../_UI/MySelect/MySelect";
import LocalStorageService from "../../_services/LocalStorageServices/LocalStorageService";

const Filter = ({ selectedCategory, setSelectedCategory },) => {
  const [uniqueOptions, setUniqueOptions] = useState({
    brand: ["All"],
    year: ["All"],
  });
  
  const carsList = LocalStorageService.getAllCars();

  useEffect(() => {
    let optionsObj = {};

    for (let option in uniqueOptions) {
      let optSet = new Set();
      for (let i = 0; i < carsList.length; i++) {
        optSet.add(carsList[i][option]);
      }

      optionsObj = {
        ...optionsObj,
        [`${option}`]: [...uniqueOptions[option], ...optSet],
      };
      
    }

    setUniqueOptions(optionsObj);
  }, []);


  return (
    <div>
      <div className="filter-group">
        <label htmlFor="brand">Бренд: </label>
        <MySelect
          key={uuidv4()}
          id={`brand`}
          value={selectedCategory.brand}
          options={uniqueOptions.brand}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </div>
      <div className="filter-group">
        <label htmlFor="year">Год: </label>
        <MySelect
          key={uuidv4()}
          id={`year`}
          value={selectedCategory.year}
          options={uniqueOptions.year}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </div>
    </div>
  );
};

export default Filter;
