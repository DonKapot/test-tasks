import React from 'react';
import {MdMonetizationOn, MdSettings, MdShoppingCart, MdTrendingUp, MdFormatListBulleted} from 'react-icons/md';
import './bottom_menu.css';

const BottomMenu = ()=>(
    <nav className="menu-bottom navbar fixed-bottom pb-1 pt-1 d-inline-flex"> 
        <a className="text-center w-20" href="/">
          <div className="ico-img"><MdFormatListBulleted size={'2em'}/></div>
          <div className="ico-text">Dashboard</div>
        </a>
        <a className="text-center w-20" href="/">
          <div className="ico-img"><MdTrendingUp size={'2em'}/></div>
          <div className="ico-text">MegaBot</div>
        </a>
        <a className="text-center w-20" href="/">
          <div className="ico-img"><MdShoppingCart size={'2em'}/></div>
          <div className="ico-text">Bot Market</div>
        </a>
        <a className="text-center w-20" href="/">
          <div className="ico-img"><MdMonetizationOn size={'2em'}/></div>
          <div className="ico-text">Coin Prices</div>
        </a>
        <a className="text-center w-20" href="/">
          <div className="ico-img"><MdSettings size={'2em'}/></div>
          <div className="ico-text">Profile</div>
        </a>
    </nav>
  );

export default BottomMenu;
