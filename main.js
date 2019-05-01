import React from 'react';
import { render } from 'react-dom';
import './test.css';

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            "message" : null
        }
    }

    componentDidMount() {
        this.setState({ "message" : "Hello World!" })
    }

    render() {
        return (
            <h1 className="bg-custom">{this.state.message}</h1>
        )
    }
}

render(<App />, document.getElementById('reactapp'))