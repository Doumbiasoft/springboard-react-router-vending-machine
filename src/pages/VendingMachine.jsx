import React from 'react';
import "./VendingMachine.css";
import Background from  "../assets/images/Background.png";
import {NavLink} from "react-router-dom";



export default function VendingMachine() {
  return (
    <div className='VendingMachine'>
        <div className='background-transparent'>
           <h1>Vending Machine</h1>
        </div>
        <div className='Wrap'>
            <div className='VendingMachine-left'>
                <div className='background-transparent'>
                  <h1>Hello, I am a vending machine. What would you like to eat?</h1>
                </div>
            </div>
            <div className='VendingMachine-middle'>
                <img className='VendingMachine-bg' src={Background} alt=''/>
            </div>
            <div className='VendingMachine-right'>
                <div className='background-transparent'>
                  <h1>List of snack</h1>
                  <hr/>
                  <nav className="Nav">
                    <NavLink exact to="/soda">
                        SODA
                    </NavLink>
                    <NavLink exact to="/ships">
                        CHIPS
                    </NavLink>
                    <NavLink exact to="/sardines">
                       FRESH SARDINES
                    </NavLink>
                    </nav>
                </div>
            </div>
        </div>
    </div>
  )
}
