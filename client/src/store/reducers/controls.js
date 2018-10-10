import {GET_CONTROLS} from '../actions/constants'

const controlsReducer = (state = [], {type, payload}) => {
    switch (type) {
        case GET_CONTROLS:
            return payload;
        default:
            return state;
    }
};

export default controlsReducer;