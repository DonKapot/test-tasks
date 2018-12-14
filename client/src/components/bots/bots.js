import React from 'react';
import './bots.css';

const Bots = ({bots,period}) =>{
    let img = (name)=>{
        try{
            return require(`../../images/bots/${name}.jpg`);
        }
        catch(e){
            return require(`../../images/bots/strange_bot.jpg`);
        }
    };
    let allBots = bots.length ? 
    (
        bots.map(b=>{
            return (
                <button key={b.name} className="bot btn btn-link">
                    <div className="d-flex justify-content-center align-content-center align-items-center flex-column">
                            <img src={img(b.name)} className="bot-ico" alt="bot img"/>
                            <div className="bot-title">{b.name}</div>
                            <div className="bot-percent" style={{color: b[period]>0?'#5da753':'#f2427d'}}>{b[period]>0?`+${b[period]}`:b[period]}%</div> 
                    </div>
                </button>
            )
        })
    ) : 
    (
        <div>Loading...</div>
    );

    return (
        <div className="bots d-flex justify-content-around flex-wrap pl-3 pr-3 pb-3">
            {allBots}
        </div>
    );
}

export default Bots;
