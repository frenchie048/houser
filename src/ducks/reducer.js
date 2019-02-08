//INITIAL STATE
const INITIAL_STATE = {
    name: '',
    address: '',
    city: '',
    state: '',
    zip: 0,
    img: '',
    mortgage: 0.00,
    rent: 0.00
}

//action type!
const UPDATE_PROPERTY_INFO = 'UPDATE_PROPERTY_INFO';
const UPDATE_PROPERTY_IMG = 'UPDATE_PROPERTY_IMG';
const UPDATE_FINANCIAL_INFO = 'UPDATE_FINANCIAL_INFO'

//reducer function w/ switch!
export default function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case UPDATE_PROPERTY_INFO:
        // return
        case UPDATE_PROPERTY_IMG:
        // return
        case UPDATE_FINANCIAL_INFO:
        // return
        default:
            return state
    }
}

//action creator
// SAMPLE
// Action : {
//     type: String
//     payload: can be object or string or number...whatever
// }