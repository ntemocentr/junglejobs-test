/**
 * Created by user on 29.07.2015.
 */
import {GRIDDLE_SET_FILTER,GRIDDLE_UNSET_FILTER} from '../constants/ActionTypes.js'

import _ from 'underscore';

const initialState = {};


export default function filter(state = initialState, action = null) {

	if (!action) {
		return state;
	}

	switch (action.type) {
		case GRIDDLE_SET_FILTER:
			state = _.clone(state);
			state[action.field] = action.value;
			return state;
			break;
		case GRIDDLE_UNSET_FILTER:
			state = _.clone(state);
			delete state[action.field];
			return state;
			break;
		default:
			return state
	}

}