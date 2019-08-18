import React from 'react';
import calculate from '../logic/calculate';
import './App.css';
import ButtonAction from './ButtonAction';
import Display from './Display';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      total: null,
      next: null,
      operation: null
    }
  }

  handleClick = buttonName => {
    this.setState(calculate(this.state, buttonName))
  }

  render() {
    return (
      <div className="component-app">
        Showin' off
        <Display value={this.state.next || this.state.total || '0'} />
        <ButtonAction clickHandler={this.handleClick} />
      </div>
    )
  }
}
export default App