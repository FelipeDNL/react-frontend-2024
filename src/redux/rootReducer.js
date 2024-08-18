import { combineReducers } from 'redux'
import mesasReducer from './mesas/mesasSlice';
import pedidosMesaReducer from './pedidosMesa/pedidosMesaSlice';

const rootReducer = combineReducers({
    mesas: mesasReducer,
    pedidosMesas: pedidosMesaReducer,
});

export default rootReducer;