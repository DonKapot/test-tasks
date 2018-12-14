import React, { Component } from 'react';
import './App.css';

import data from './data/data';
//components
// import Test from './components/test'
import TopMenu from './components/top_menu/top_menu';
import Graph from './components/graph/graph';
import Bots from './components/bots/bots';
import Period from './components/period/period';
import BottomMenu from './components/bottom_menu/bottom_menu';

class App extends Component {
  
  state = {
    balance: 0,
    on_hold: 0,
    capital: 0,
    currency: 0,
    period: '7d',
    bots: []
  }

  componentWillMount() {
    //instead fetch
    new Promise((resolve,reject)=>{
      let jsonFile = JSON.stringify(data);
      if(!sessionStorage.getItem('botApp')) {
        sessionStorage.setItem('botApp', jsonFile);
      }
    });
    new Promise(
      (resolve,reject)=>{
          let botsJson = sessionStorage.getItem('botApp');
          let botsAll = JSON.parse(botsJson);
          let response = botsAll || [];
              if(response)
                  resolve(response);
              else
                  reject([])
      }
    ).then(res=>{
      this.setState({bots: res.bots});
      return res;
    }).then(res=>{
      this.setState({currency: res.trading_capital_currency});
      return res;
    }).then(res=>{
      this.setState({capital: res.trading_capital});
      return res;
    }).then(res=>{
      this.setState({on_hold: res.on_hold});
      return res;
    }).then(res=>{
      this.setState({balance: res.balance});
      return res;
    });
  }

  handlePeriod = (per) => {
    this.setState({period: per});
  }

  render() {
    // console.log(this.state);
    return (
      <div className="app">
        <TopMenu/>
        <div className="container-fluid m-0 p-0">
          <Graph balance={this.state.balance} on_hold={this.state.on_hold} capital={this.state.capital} currency={this.state.currency}/>
          <Bots period={this.state.period} bots={this.state.bots}/>
          <Period handlePeriod={this.handlePeriod}/>
        </div>
        <BottomMenu/>
      </div>
    );
  }
}

export default App;
