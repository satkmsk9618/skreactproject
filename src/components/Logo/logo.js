import React from 'react';
import Tilt from 'react-tilt';
import './logo.css';

const Logo = () =>{
    return (
    <Tilt className="Tilt rounded  ml-5 mt-5" options={{ max : 25 }} style={{ height: 150, width: 150 }} >   
      <div className="Tilt-inner p-3"> <img alt='logo' src="https://img.icons8.com/cotton/130/000000/brain--v1.png"/></div>
    </Tilt>
    )
}

export default Logo;