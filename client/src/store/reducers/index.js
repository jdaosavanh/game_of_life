import {combineReducers} from 'redux';
import controlsReducer from './controls';

export default combineReducers({
    controls: controlsReducer
})
