import {
	GET_USERS_FAILED,
	GET_USERS_REQUESTED,
	GET_USERS_SUCCESS,
	// LOGIN,
} from '../actions/types'

const initialState = {
	items: [],
	loading: false,
	clickedUser: {},
	header: '',
	error: null,
}

export default function (state = initialState, action) {
	switch (action.type) {
		case GET_USERS_REQUESTED:
			console.log('fetched')
			return {
				...state,
				loading: true,
			}
		case GET_USERS_SUCCESS:
			console.log('Success')
			return {
				...state,
				loading: false,
				items: action.users,
			}
		case GET_USERS_FAILED:
			return {
				...state,
				loading: false,
				error: action.message,
			}
		// case LOGIN:
		// 	return {
		// 		...state,
		// 		clickedUser: action.user,
		// 	}
		default:
			return state
	}
}
