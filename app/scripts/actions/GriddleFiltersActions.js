import { GRIDDLE_SET_FILTER, GRIDDLE_UNSET_FILTER} from '../constants/ActionTypes.js'



export function set(field,value) {
	return {
		type: GRIDDLE_SET_FILTER,
		field,
		value
	};
}

export function unset(field) {
	return {
		type: GRIDDLE_UNSET_FILTER,
		field

	};
}