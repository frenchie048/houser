import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import axios from 'axios';
import './wizard.css';

class StepTwo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            img: ''
        }
        // this.addHouse = this.addHouse.bind(this);
    }

    // MOVED TO STEP THREE
    // addHouse() {
    //     const { img } = this.state;
    //     let newHouse = {
    //         img
    //     }
    //     axios.post('/api/houses', newHouse).then(response => {

    //     })
    // }

    render() {
        const { img } = this.state;
        console.log(this.state);
        return (
            <div>
                <div className='input-info'>
                    <h4>Image URL:</h4>
                    <input value={img} onChange={(e) => this.setState({ img: e.target.value })} />
                </div>
                <br></br>
                <div className='step2-buttons'>
                    <Link to='/wizard/step1'><button>Previous Step</button></Link>
                    <Link to='/wizard/step3'><button>Next Step</button></Link>
                </div>
            </div>
        )
    }
}

export default StepTwo;