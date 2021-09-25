import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import s from './Filter.module.css'
import MySelect from "../../_UI/MySelect/MySelect";
import LocalStorageService from "../../_services/LocalStorageServices/LocalStorageService";

const Filter = ({ selectedCategory, setSelectedCategory, sortedBy, setSortedBy }, props) => {
  const [uniqueOptions, setUniqueOptions] = useState({
    brand: ["All"],
    year: ["All"],
    color: ["All"],
    engine: ["All"],
  });
  
  const carsList = LocalStorageService.getAllCars();

  useEffect(() => {
    let optionsObj = {};

    for (let option in uniqueOptions) {
      let optSet = new Set();
      for (let i = 0; i < carsList.length; i++) {
        optSet.add(carsList[i][option]);
      }

      optSet = [...optSet].sort();
      optionsObj[`${option}`] = [...uniqueOptions[option], ...optSet];
      
    }

    setUniqueOptions(optionsObj);
  }, []);

  const changeSort = (value)=> {
    let sortOptions = value.split(',');
    let isReverse = sortOptions[1] ? true:false;
    setSortedBy({value: value, key: sortOptions[0], reverse: isReverse});
  }


  return (
    <div className={s.filter}>
      <div className={s.sortBlock}>
        <select value={sortedBy.value} onChange={e => changeSort(e.target.value)}>
          <option value="brand">От А до Я</option>
          <option value="brand,reverse">От Я до А</option>
          <option value="price">От дешового к дорогому</option>
          <option value="price,reverse">От дорогого к дешовому</option>
        </select>
      </div>
      <div className={s.formGroup}>
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
      <div className={s.formGroup}>
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
      <div className={s.formGroup}>
        <label htmlFor="color">Цвет: </label>
        <MySelect
          key={uuidv4()}
          id={`color`}
          value={selectedCategory.color}
          options={uniqueOptions.color}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </div>
      
      <div className={s.formGroup}>
        <label htmlFor="engine">Объём двигателя:</label>
        <MySelect
          key={uuidv4()}
          id={`engine`}
          value={selectedCategory.engine}
          options={uniqueOptions.engine}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </div>
    </div>
  );
};

export default Filter;
