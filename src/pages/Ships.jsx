import React from 'react';
import "./Ships.css";
import imgShips from  "../assets/images/ships/chips_PNG4.png";
import { NavLink } from 'react-router-dom';



export default function Ships() {
  return (
    <div className='Ships'>
        <div className='background-transparent'>
           <h1>Ships</h1>
        </div>
        <div className='Wrap'>
            <div className='Ships-left'>
               
                <img className='Ships-bg' src={imgShips} alt=''/>
              
            </div>
            <div className='Ships-middle'>
                <div className='background-transparent'>
                <nav className="Nav">
                    <NavLink exact to="/">
                        GO BACK
                    </NavLink>
                </nav>
                </div>
            </div>
            <div className='Ships-right'>
               
                <img className='Ships-bg' src={imgShips} alt=''/>
               
            </div>
        </div>
    </div>
  )
}
