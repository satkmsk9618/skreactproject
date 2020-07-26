import React from 'react';
import './imagelink.css';

const Image = ({ onInputChange, onSubmit }) =>{
    return (
       <div className='mt-2 white'>
           <p className='f3 mt-3 mb-3 p-3'>
               {'This is a Face detection Website from images. give a try'}
           </p>
           <div className='d-flex flex-column '>
               <div className='form center d-block pb4 col-sm-8 rounded '>
               <input className='w-60 center rounded mt-5 ph2 pv2 text-center form-control pr-3 pl-3 ' placeholder='Enter your image URL' type='text' onChange={onInputChange} />
               <button className='w-20 center grow rounded f6 link btn pointer mt-4 bg-black white border border-white p-1' onClick={onSubmit} >detect</button>
               </div>
           </div>
       </div>
    )
}

export default Image;