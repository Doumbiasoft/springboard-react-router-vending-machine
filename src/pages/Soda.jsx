import React from 'react';
import "./Soda.css";
import imgSoda from  "../assets/images/soda/3889234.png";
import { NavLink } from 'react-router-dom';



export default function Soda() {
  return (
    <div className='Soda'>
        <div className='background-transparent'>
           <h1>Soda</h1>
        </div>
        <div className='Wrap'>
            <div className='Soda-left'>
               
                <img className='Soda-bg' src={imgSoda} alt=''/>
              
            </div>
            <div className='Soda-middle'>
                <div className='background-transparent'>
                <nav className="Nav">
                    <NavLink exact to="/">
                        GO BACK
                    </NavLink>
                </nav>
                </div>
            </div>
            <div className='Soda-right'>
               
                <img className='Soda-bg' src={imgSoda} alt=''/>
               
            </div>
        </div>
    </div>
  )
}
