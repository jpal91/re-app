import { combineReducers } from "redux";

import homes from './homes'
import land from './land'
import under from './under'
import deets from './propdeets'
import last from './last'

export default combineReducers({
    homes: homes,
    land: land,
    under: under,
    deets: deets,
    last: last
});
