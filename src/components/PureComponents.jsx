import React, {PureComponent} from 'react'

export default class PureComponents extends PureComponent{
    constructor(){
        super();
        this.state={
          count:0
        }
      }
      render(){
        return (
          <>
        
          <h1>Pure Component Count : {this.state.count}</h1>
          
          <div className='btnflex'>
          <button className='btn' onClick={()=>{this.setState({count: this.state.count + 1})}}>Increment</button>
          <button className='btn' onClick={()=>{this.setState({count: this.state.count - 1})}}>Decrement</button>
          </div>
          </>
        )
      }
}