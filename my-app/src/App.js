import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import logo from './logo.svg';
import './App.css';
import { RankedChoiceVotingSimulator } from './js/rankedChoiceVotingSimulator.js';

class App extends Component {
  constructor(props) {
    super(props);
    // this.state = {appView: true};


    // Bindings
    this.aboutView = this.aboutView.bind(this);
    this.scen1View = this.scen1View.bind(this);
    this.scen2View = this.scen2View.bind(this);
  }

  /// Views
  aboutView(e) {
    console.log("About View");
  }

  scen1View(e) {
    //this.scen1
    this.sim = new RankedChoiceVotingSimulator();
    var element = (this.sim.component);
    console.log(element);
    ReactDOM.render(element, document.getElementById('App-view'));
    console.log('>>> lol');
  }
  
  scen2View(e) {

  }
  
  render() {
    return (
      <div className="App">
        <div className="App-menu">
          <ul>
            <li className="menu-item" onClick={this.aboutView} id="about">About Ranked Choice Voting</li>
            <li className="menu-item" onClick={this.scen1View} id="scen1">Scenario #1 - </li>
            <li className="menu-item" onClick={this.scen2View} id="about">test</li>
          </ul>
        </div>
        <div className="App-view">
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.aboutView();
  }

}

export default App;
