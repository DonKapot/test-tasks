import React from 'react';
import './graph.css';
import {FaHospitalSymbol} from 'react-icons/fa';

const Graph = ({balance,on_hold, capital,currency}) => (
    <div className="graph d-flex flex-column">
    
        <div className="graph-titles d-inline-flex flex-column justify-content-around text-uppercase font-weight-bold text-m pl-3 pr-3 pb-2">
            <div className="title-main">
                <div className="title">TRADING CAPITAL</div>
            </div>
            <div className="title-side d-inline-flex justify-content-between align-items-center">
                <div className="capital text-l nums">{capital} {currency}</div>
                <div className="side">
                    <div className="balans d-flex justify-content-between align-items-center flex-nowrap">
                        <span className="side-title pr-1">BALANCE: </span> 
                        <span className="num pr-1">{balance} </span> 
                        <FaHospitalSymbol color={'#43546c'}/>
                    </div>
                    <div className="onhold d-flex justify-content-between align-items-center flex-nowrap">
                        <span className="side-title pr-1">ON HOLD: </span> 
                        <span className="num pr-1">{on_hold} </span> 
                        <FaHospitalSymbol color={'#43546c'}/>
                    </div>
                </div>
            </div>     
        </div>
        
        <div className="graph-ico text-center"></div>
        
        <div className="graph-periods d-inline-flex justify-content-around align-items-center pl-3 pr-3 pb-1">
            <div className="period">22.04</div>
            <div className="period">23.04</div>
            <div className="period">24.04</div>
            <div className="period">25.04</div>
            <div className="period">26.04</div>    
        </div>
        
    </div>
);

export default Graph;
