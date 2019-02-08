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
        this.deleteHouse = this.deleteHouse.bind(this);
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

    //WILL NEED TO PASS W REDUX
    deleteHouse(id) {
        axios.delete(`/api/houses/${id}`).then(response => {
            this.getHouses();
        })
    }

    render() {
        const { houses } = this.state;

        const mappedHouses = houses.map(house => {
            return <div key={house.id}>
                <House house={house} deleteHouse={this.deleteHouse} />
            </div>
        })

        return (
            <div className='dashboard'>
                <div className='top'>
                    <h1>Dashboard!</h1>
                    <Link to='/wizard/step1'><button>Add New Property</button></Link>
                    <ln />
                </div>

                <h3>Home Listings</h3>
                <div className='houses'>
                    {mappedHouses}
                </div>

            </div>
        )
    }
}

export default Dashboard;
// EXAMPLE <Link to="/PATH"><button>Button Text</button></Link>