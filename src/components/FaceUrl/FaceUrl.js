import React from 'react';
import './faceUrl.css';

const FaceUrl = ({ ImageUrl , box }) =>{
    return (
    <div className='center'>
       <div className='absolute ml-4 mr-4 mt-2 mb-2 '>
         <img id='inputimage' src={ ImageUrl } alt='displayed here' width='500px' height='auto' />
         <div className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
       </div>
    </div>
    )
}

export default FaceUrl;