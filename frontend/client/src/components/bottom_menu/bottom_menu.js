import React from 'react';
import {MdMonetizationOn, MdSettings, MdShoppingCart, MdTrendingUp, MdFormatListBulleted} from 'react-icons/md';
import './bottom_menu.css';

const BottomMenu = ()=>(
    <nav className="navbar fixed-bottom pb-1 pt-1" style={ {fontSize:'2.2vmin'} }> 
        <a className="text-center" href="/">
          <div className="ico-img"><MdFormatListBulleted size={'3vmax'}/></div>
          <div className="ico-text">Dashboard</div>
        </a>
        <a className="text-center" href="/">
          <div className="ico-img"><MdTrendingUp size={'3vmax'}/></div>
          <div className="ico-text">MegaBot</div>
        </a>
        <a className="text-center" href="/">
          <div className="ico-img"><MdShoppingCart size={'3vmax'}/></div>
          <div className="ico-text">Bot Market</div>
        </a>
        <a className="text-center" href="/">
          <div className="ico-img"><MdMonetizationOn size={'3vmax'}/></div>
          <div className="ico-text">Coin Prices</div>
        </a>
        <a className="text-center" href="/">
          <div className="ico-img"><MdSettings size={'3vmax'}/></div>
          <div className="ico-text">Profile</div>
        </a>
    </nav>
  );

export default BottomMenu;
