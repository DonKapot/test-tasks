import React from 'react';
import './graph.css';
// import '../../img/graph.png'

const Graph = ({balance,on_hold, capital,currency}) => (
    <div className="graph d-flex flex-column">
    
        <div className="graph-titles d-inline-flex flex-column justify-content-around text-uppercase font-weight-bold text-m">
            <div className="title-main">
                <div className="title">TRADING CAPITAL</div>
            </div>
            <div className="title-side d-inline-flex justify-content-between align-items-center">
                <div className="capital text-l nums">{capital} {currency}</div>
                <div className="side">
                    <div className="balans nums">BALANCE: {balance}</div>
                    <div className="onhold nums">ON HOLD: {on_hold}</div>
                </div>
            </div>     
        </div>
        
        <div className="graph-ico text-center"></div>
        
        <div className="graph-periods d-inline-flex justify-content-around align-items-center pt-2">
            <div className="period">22.04</div>
            <div className="period">23.04</div>
            <div className="period">24.04</div>
            <div className="period">25.04</div>
            <div className="period">26.04</div>            
        </div>
        
    </div>
);

export default Graph;
