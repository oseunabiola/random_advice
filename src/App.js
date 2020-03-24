import React from 'react';

import './App.css';

export default class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = { advice: ''};

        this.fetchAdvice = this.fetchAdvice.bind(this);
    }

    componentDidMount() {
        this.fetchAdvice();
    }

    fetchAdvice() {
        const adviceURL = 'https://api.adviceslip.com/advice';
        fetch(adviceURL)
        .then(res=>{
            return res.json();
        })
        .then(res=>{
            const advice = res.slip.advice;
            this.setState({ advice });
        })
        .catch(err=>console.log(err));
    }

    render () {
        return (
            <div className='app'>
                <div className='card'>
                    <h1 className='advice'>{this.state.advice}</h1>
                    <button onClick={this.fetchAdvice}>Give me advice</button>
                </div>
            </div>
            
        );
    }
}