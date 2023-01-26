import React, { Component } from 'react';
import './App.css';
import { Counter } from './components/HigherOrderComponent';
import PureComponents from './components/PureComponents';

class App extends Component{



  render(){
    return (
      <>
      <div className='purecomponents'>
        <PureComponents/>
      </div>

        <div className='hoc'>
          
        <Counter/>
        </div>
    </>
    );
  }
}

export default App