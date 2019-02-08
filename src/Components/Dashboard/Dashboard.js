import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import House from '../House/House';
import './dashboard.css';

class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            houses: []
        }
        this.getHouses = this.getHouses.bind(this);
    }

    componentDidMount() {
        this.getHouses();
    }

    getHouses() {
        axios.get('/api/houses').then(response => {
            this.setState({
                houses: response.data
            })
        })
    }

    render() {
        const { houses } = this.state;

        const mappedHouses = houses.map(house => {
            return <div>
                <House house={house} />
            </div>
        })

        return (
            <div>
                <h1 className='dashboard-title'>Dashboard!</h1>

                {mappedHouses}

                <Link to='/wizard'><button>Add New Property</button></Link>

            </div>
        )
    }
}

export default Dashboard;
// EXAMPLE <Link to="/PATH"><button>Button Text</button></Link>