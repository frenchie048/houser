import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Wizard extends Component {
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

    // handleChange = (e) => {
    //     this.setState({
    //         [e.target.name]: e.target.value
    //     })
    //     console.log(this.setState)
    // };

    render() {

        const { name, address, city, state, zip } = this.state;
        console.log(this.state);
        return (
            <div>
                <h1>Wizard!</h1>
                Property Name:
                <input value={name} onChange={(e) => this.setState({ name: e.target.value })} />
                Address:
                <input value={address} onChange={(e) => this.setState({ address: e.target.value })} />
                City:
                <input value={city} onChange={(e) => this.setState({ city: e.target.value })} />
                State:
                <input value={state} onChange={(e) => this.setState({ state: e.target.value })} />
                Zip:
                <input value={zip} onChange={(e) => this.setState({ zip: e.target.value })} />
                <Link to='/'><button>Cancel</button></Link>
            </div>
        )
    }
}

export default Wizard;
// EXAMPLE <Link to="/PATH"><button>Button Text</button></Link>

//INLINE EXAMPLE onChange={ e => this.setState({ name: e.target.value }) }
