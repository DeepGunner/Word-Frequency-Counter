import React, { Component } from 'react'
import './App.css'


class App extends Component {
    constructor(props) {
        super(props)
    
        this.state = {number: 0, data: null}

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({number: event.target.value})
    }
    
    componentDidMount() {
        fetch('/data')
            .then(res => res.json())
            .then(data => this.setState({data: data}))
    }

    render() {
        if (!this.state.data) {
            return <h4>Loading...</h4>
        }

        return(
            <div className="App">
                <h1>ttt word frequency counter</h1>
                <input type="text" placeholder="Enter a number" value={this.state.value} onChange={this.handleChange} />
                <br/>
                <h4>{this.state.number} most frequently occuring word/s.</h4>
                <div className="container">
                    <table align="center">
                        <tr>
                            
                            <th className="words">Word</th>
                            <th className="count">Count</th>
                        </tr>
                        {this.state.data.slice(0, this.state.number).map((item, index) =>
                            <tr>
                                
                                <td className="words">{item.word}</td>
                                <td className="count">{item.count}</td>
                            </tr>
                        )}
                    </table>
                </div>
                <br/>
                
            </div>
        )
    }
}

export default App;
