import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './wizard.css';

class StepThree extends Component {
    constructor(props) {
        super(props);

        this.state = {
            mortgage: 0,
            rent: 0,
        }
        this.addHouse = this.addHouse.bind(this);
    }

    addHouse() {
        const { mortgage, rent } = this.state;
        let newHouse = {
            mortgage,
            rent
        }
        axios.post('/api/houses', newHouse).then(response => {

        })
    }

    render() {
        const { mortgage, rent } = this.state;
        console.log(this.state);
        return (
            <div>
                <div className='input-info'>
                    <h4>Monthly Mortgage Amount:</h4>
                    <input value={mortgage} onChange={(e) => this.setState({ mortgage: e.target.value })} />
                    <h4>Desired Monthly Rent: </h4>
                    <input value={rent} onChange={(e) => this.setState({ rent: e.target.value })} />
                </div>
                <br></br>
                <div className='step3-buttons'>
                    <Link to='/wizard/step2'><button>Previous Step</button></Link>
                    <Link to='/'><button onClick={this.addHouse}>Complete</button></Link>
                </div>
            </div>
        )
    }
}

export default StepThree;