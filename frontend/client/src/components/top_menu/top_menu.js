import React from 'react';
import {GoSync, GoThreeBars} from 'react-icons/go';
import './top_menu.css';

const TopMenu = () => (
    <nav className="navbar fixed-top navbar-expand-* p-0">

        <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <GoThreeBars size={'3vmax'}/>
        </button>
        
        <a className="navbar-brand m-0" href="/">Dashboard</a>
        
        <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <GoSync size={'3vmax'}/>
        </button>

      <div className="collapse navbar-collapse text-center p-0" id="navbarNavAltMarkup">
          <div className="navbar-nav p-0">
            <a className="nav-item nav-link" href="/">Home <span className="sr-only">(current)</span></a>
            <a className="nav-item nav-link" href="#features">Features</a>
            <a className="nav-item nav-link" href="#pricing">Pricing</a>
          </div>
      </div>   
      
    </nav>
  );

export default TopMenu;
