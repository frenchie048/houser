import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updatePropertyImg } from '../../ducks/reducer';
// import axios from 'axios';
import './wizard.css';

class StepTwo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            img: ''
        }
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
                    <Link to='/wizard/step1'>
                        <button onClick={(e) => updatePropertyImg(e.target.value)} >Previous Step</button>
                    </Link>
                    <Link to='/wizard/step3'>
                        <button onClick={(e) => updatePropertyImg(e.target.value)} >Next Step</button>
                    </Link>
                </div>
            </div>
        )
    }
}

function mapStateToProps(reduxState) {
    const { img } = reduxState;
    return {
        img
    }
};

export default connect(mapStateToProps, { updatePropertyImg })(StepTwo);