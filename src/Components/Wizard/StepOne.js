import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updatePropertyInfo } from '../../ducks/reducer';
// import axios from 'axios';
import './wizard.css';

class StepOne extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zip: 0
        }
    }

    // MOVED TO STEP THREE
    // addHouse() {
    //     const { name, address, city, state, zip } = this.state;
    //     let newHouse = { name, address, city, state, zip }
    //     axios.post('/api/houses', newHouse).then(response => {
    //     }) }

    render() {
        const { name, address, city, state, zip } = this.state;
        console.log(this.state);
        return (
            <div>
                <div className='input-info'>
                    <h4>Property Name:</h4>
                    <input value={name} onChange={(e) => this.setState({ name: e.target.value })} />
                    <h4>Address: </h4>
                    <input value={address} onChange={(e) => this.setState({ address: e.target.value })} />
                    <h4>City: </h4>
                    <input value={city} onChange={(e) => this.setState({ city: e.target.value })} />
                    <h4>State: </h4>
                    <input value={state} onChange={(e) => this.setState({ state: e.target.value })} />
                    <h4>Zip: </h4>
                    <input value={zip} onChange={(e) => this.setState({ zip: e.target.value })} />
                </div>
                <br></br>
                <div className='step1-button'>
                    <Link to='/wizard/step2'>
                        <button onClick={(e) => updatePropertyInfo(e.target.value)} >Next Step</button>
                    </Link>
                </div>
            </div>
        )
    }
}

function mapStateToProps(reduxState) {
    const { name, address, city, state, zip } = reduxState;
    return {
        name, address, city, state, zip
    }
};

export default connect(mapStateToProps, { updatePropertyInfo })(StepOne);