import { FETCH_WEATHER } from '../actions/index';

export default function (state = [], action) {

    switch (action.type) {
        case FETCH_WEATHER:
            // Same as below, but with ES6. Not mutating!
            // return state.concat([action.payload.data]);
            return [ action.payload.data, ...state ];
            break;
    }

    return state;
}