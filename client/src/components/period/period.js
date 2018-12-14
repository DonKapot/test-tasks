import React from 'react';
import './period.css';

const Period = ({handlePeriod}) => {
    return (
        <div className="period d-flex justify-content-around align-items-center pl-3 pr-3 pb-1">
            <div className="content">Time range: </div>
            <button type="button" className="btn btn-outline-secondary 24h" onClick={()=>handlePeriod('24h')}>24h</button>
            <button type="button" className="btn btn-outline-secondary 7d" onClick={()=>handlePeriod('7d')}>7 days</button>
            <button type="button" className="btn btn-outline-secondary 30d" onClick={()=>handlePeriod('30d')}>30 days</button>
            <button type="button" className="btn btn-outline-secondary allTime" onClick={()=>handlePeriod('all_time')}>All time</button>
        </div>
    )
};

export default Period;
