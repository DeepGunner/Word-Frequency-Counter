import React, { Component } from 'react'
import './App.css'


class App extends Component {
    constructor(props) {
        super(props)
        this.state = {number: 0, data: null}
       
    }

   
    componentDidMount() {
        fetch('/data')
        .then(res => res.json())
        .then(data => this.setState({data: data}))
    }

    render() {
            return (
              <div className="App">
                <header className="App-header">
                  <img src={logo} className="App-logo" alt="logo" />
                  <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">{this.state.response}</p>
              </div>
            );
          }
}

export default App;
