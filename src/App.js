import React from 'react';

import './App.css';

export default class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = { advice: '', error: ''};

        this.fetchAdvice = this.fetchAdvice.bind(this);
    }

    componentDidMount() {
        this.fetchAdvice();
    }

    fetchAdvice() {
        const adviceURL = 'https://api.adviceslip.com/advic';
        const adviceRes = async () => {
            const res = await fetch(adviceURL);
            if (!res.ok) {
                throw Error (res.statusText)
            }
            return res.json();
        };
        
        adviceRes()
        .then(res=>{
            this.setState({ advice: res.slip.advice });
        }).catch(err=>{this.setState({ error: err });console.log('Error => ' + err)});
        
    }

    render () {
        return (
            <div className='app'>
                <div className='card'>
                    <p className='advice'>
                        {(this.state.error) ? `${this.state.error}` : `${this.state.advice}`}
                    </p>
                    
                    <button onClick={this.fetchAdvice}>Give me advice</button>
                </div>
            </div>
            
        );
    }
}