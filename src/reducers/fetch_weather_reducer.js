import { FETCH_WEATHER } from "../actions/index";

export default function(state = [], action) {
    switch(action.type) {
        case FETCH_WEATHER:
            console.log("FETCH WEATHER received", action);
            return [action.payload.data, ...state];
        default: return state;
    }
}
