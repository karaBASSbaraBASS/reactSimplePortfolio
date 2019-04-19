import React from 'react';
import ArrowDown from './ArrowDown';

class ButtonColapse extends React.Component {
    constructor () {
      super()
      this.state = { isButtonActive: false }
      this.onClick = this.onClick.bind(this)      
    }
  
    onClick () {
      this.setState({
        isButtonActive: !this.state.isButtonActive
      })
    }
  
    render () {
  
      return (
        <div onClick={this.onClick()} className={this.state.isButtonActive ? 'active' : null}>
          10:00 - 18:00 
          <span className="collapseBtn">
              <ArrowDown/>
          </span>
        </div>
      )
    }
  }
export default ButtonColapse;