import React, { useState } from 'react';

const TemperatureConverter = () => {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');
  const [kelvin, setKelvin] = useState('');

  const handleCelsiusChange = (e) => {
    const value = e.target.value;
    setCelsius(value);
    setFahrenheit((parseFloat(value) * 9 / 5) + 32 || '');
    setKelvin(parseFloat(value) + 273.15 || '');
  };

  const handleFahrenheitChange = (e) => {
    const value = e.target.value;
    setFahrenheit(value);
    setCelsius(((parseFloat(value) - 32) * 5 / 9) || '');
    setKelvin(((parseFloat(value) - 32) * 5 / 9 + 273.15) || '');
  };

  const handleKelvinChange = (e) => {
    const value = e.target.value;
    setKelvin(value);
    setCelsius(parseFloat(value) - 273.15 || '');
    setFahrenheit(((parseFloat(value) - 273.15) * 9 / 5 + 32) || '');
  };

  return (
      <>
      <h2 className='header'>Temperature Converter</h2>
    <div className='site'>

      <label className='celc'>
        Celsius:
        <input
          type="number"
          value={celsius}
          onChange={handleCelsiusChange}
        />
      </label>

      <span> = </span>

      <label className='fahr'>
        Fahrenheit:
        <input
          type="number"
          value={fahrenheit}
          onChange={handleFahrenheitChange}
        />
      </label>

      <span> = </span>

      <label className='kel'>
        Kelvin:
        <input
          type="number"
          value={kelvin}
          onChange={handleKelvinChange}
        />
      </label>
    </div>
    </>
  );
};

export default TemperatureConverter;
