import React, { useState } from 'react'
import { useEffect } from 'react';
import InputRange from 'react-input-range';
import "react-input-range/lib/css/index.css";
import s from './PriceSlider.module.css'


const PriceSlider = (props) => {
    const [value, setValue] = useState(props.currentPrice);

    useEffect(()=> {
        setValue(props.currentPrice)
    }, [props.currentPrice])

    const changePrice = ()=> {
        props.setPrice( {...props.price, currentPrice: value} )
    }

    return (
        <div className={s.priceSlider}>
            <InputRange
                maxValue={props.maxDefaultValue}
                minValue={0}
                step={1000}
                value={value}
                onChange={value => setValue(value)}
                onChangeComplete={changePrice}
            />
        </div>
    )
}

export default PriceSlider

