import {
	CHNAGE_HEADER,
	GET_USERS_FAILED,
	GET_USERS_REQUESTED,
	GET_USERS_SUCCESS,
	LOGIN_SAGA,
	SHOW_MODEL,
} from '../actions/types'

const initialState = {
	items: [],
	loading: false,
	clickedUser: {},
	header: '',
	modelIsOpen: false,
	error: null,
}

const func = (state = initialState, action) => {
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
		case LOGIN_SAGA:
			return {
				...state,
				clickedUser: action.user,
			}
		case CHNAGE_HEADER:
			return {
				...state,
				header: action.header,
			}
		case SHOW_MODEL:
			return {
				...state,
				modelIsOpen: action.value,
			}
		default:
			return state
	}
}

export default func
