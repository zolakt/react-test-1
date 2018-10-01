import React, { Component } from 'react';

class Header extends Component {
    constructor(props){
      super(props);
  
      this.state = {
        color: '#000'
      }
    }
  
    changeColor() {
      this.setState({
        color: (this.state.color === '#000') ? '#' + this.props.colors[Math.floor(Math.random()*this.props.colors.length)] : '#000'
      });
    }
  
    render() {
        return (
            <h1 className="App-title" onClick={ this.changeColor.bind(this) } style={{ color: this.state.color }}>{ this.props.text }</h1>
        );
    }
  }

  export default Header
  