import React, { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { useDataContext } from '../../../Context/DataContext';
const RangeSliderComponent = () => {

  const {selectedValue, setSelectedValue} = useDataContext();

  const handleSliderChange = (value:any) => {
    setSelectedValue(value);
  };
  const trackStyle = {
    backgroundColor: '#3182ce', 
    
  };
  return (
    <>
    
    <div style={{ margin: '20px' }}>
      <Slider
        min={1}
        max={100}
        step={1}
        value={selectedValue}
        onChange={handleSliderChange}
        trackStyle={[trackStyle]}
      />
      <p> Correctivity: {selectedValue}</p>
    </div>

    <h1></h1>
    </>
  );
};

export default RangeSliderComponent;
