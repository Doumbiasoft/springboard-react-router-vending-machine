import React from 'react';
import "./Sardines.css";
import imgSardines from  "../assets/images/freshsardines/sardine.png";
import { NavLink } from 'react-router-dom';



export default function Sardines() {
  return (
    <div className='Sardines'>
        <div className='background-transparent'>
           <h1>Sardines</h1>
        </div>
        <div className='Wrap'>
            <div className='Sardines-left'>
               
                <img className='Sardines-bg' src={imgSardines} alt=''/>
              
            </div>
            <div className='Sardines-middle'>
                <div className='background-transparent'>
                <nav className="Nav">
                    <NavLink exact to="/">
                        GO BACK
                    </NavLink>
                </nav>
                </div>
            </div>
            <div className='Sardines-right'>
               
                <img className='Sardines-bg' src={imgSardines} alt=''/>
               
            </div>
        </div>
    </div>
  )
}
