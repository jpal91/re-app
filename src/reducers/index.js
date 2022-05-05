import { combineReducers } from "redux";

import homes from './homes'
import land from './land'
import under from './under'

export default combineReducers({
    homes: homes,
    land: land,
    under: under,
});
