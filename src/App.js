import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      colors: [],
      text: 'Welcome to React'
    }
  }

  async componentDidMount() {
    await fetch('http://www.colr.org/json/colors/random/2')
      .then(resp => resp.json())
      .then(json => {
        let colors = json.colors.map(y => y.hex);

        this.setState({
          colors: colors
        });

        console.log(colors);

        return colors;
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleTextChange(e) {
    this.setState({
      text: e.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Header colors={ this.state.colors } text={ this.state.text } />
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <input type="text" onChange={(e) => this.handleTextChange(e) }></input>
        </div>
      </div>
    );
  }
}

export default App;
