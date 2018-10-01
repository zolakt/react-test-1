import React, { Component } from 'react';

class Header extends Component {
    constructor(props){
      super(props);

      this.defaultColor = props.defaultColor || '#000';
  
      this.state = {
        color: this.defaultColor
      }
    }
  
    changeColor() {
      this.setState({
        color: (this.state.color === this.defaultColor) ? '#' + this.props.colors[Math.floor(Math.random()*this.props.colors.length)] : this.defaultColor
      });
    }
  
    render() {
        return (
            <h1 className="App-title" onClick={ this.changeColor.bind(this) } style={{ color: this.state.color }}>{ this.props.text }</h1>
        );
    }
  }

  export default Header
