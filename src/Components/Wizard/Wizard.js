import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
// import axios from 'axios';
import './wizard.css';

class Wizard extends Component {
    //moved to STEP ONE component

    render() {


        return (
            <div>
                <div className='form-top'>
                    <h1>Add New Listing</h1>
                    <Link to='/'><button>Cancel</button></Link>
                </div>

                <div className="steps">
                    <Route path='/wizard/step1' component={StepOne} />
                    <Route path='/wizard/step2' component={StepTwo} />
                    <Route path='/wizard/step3' component={StepThree} />
                </div>
            </div>
        )
    }
}

export default Wizard;
// EXAMPLE <Link to="/PATH"><button>Button Text</button></Link>

//INLINE EXAMPLE onChange={ e => this.setState({ name: e.target.value }) }
