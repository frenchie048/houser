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
const UPDATE_FINANCIAL_INFO = 'UPDATE_FINANCIAL_INFO';
const CANCEL_NEW_HOUSE = 'CANCEL_NEW_HOUSE';


//reducer function w/ switch!
export default function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case UPDATE_PROPERTY_INFO:
            return Object.assign({}, state, {
                name: action.payload.name,
                address: action.payload.address,
                city: action.payload.city,
                state: action.payload.state,
                zip: action.payload.zip,
                img: '',
                mortgage: 0.00,
                rent: 0.00
            });
        case UPDATE_PROPERTY_IMG:
            return Object.assign({}, state, {
                name: '',
                address: '',
                city: '',
                state: '',
                zip: 0,
                img: action.payload,
                mortgage: 0.00,
                rent: 0.00
            });
        case UPDATE_FINANCIAL_INFO:
            return Object.assign({}, state, {
                name: '',
                address: '',
                city: '',
                state: '',
                zip: 0,
                img: '',
                mortgage: action.payload.mortgage,
                rent: action.payload.rent
            });
        default:
            return state
    }
}




//SAMPLES
//return { ...state, inventory: action.payload }
//return Object.assign({}, state, { loanType: action.payload });

//action creator
export function updatePropertyInfo(name, address, city, state, zip) {
    return {
        type: UPDATE_PROPERTY_INFO,
        payload: {
            name,
            address,
            city,
            state,
            zip
        }
    }
}

export function updatePropertyImg(img) {
    return {
        type: UPDATE_PROPERTY_IMG,
        payload: img
    }
}

export function updateFinancialInfo(mortgage, rent) {
    return {
        type: UPDATE_FINANCIAL_INFO,
        payload: {
            mortgage,
            rent
        }
    }
}

export function cancelNewHouse() {
    return {
        type: CANCEL_NEW_HOUSE,
        payload: INITIAL_STATE
    }
}