import {
	GET_USERS_REQUESTED,
	LOGIN_SAGA,
	CHNAGE_HEADER,
	SHOW_MODEL,
} from './types'

export function getUsers() {
	return {
		type: GET_USERS_REQUESTED,
	}
}

export const setClickedUser = user => ({ type: LOGIN_SAGA, user })

export const headerChange = header => ({ type: CHNAGE_HEADER, header })

export const showModel = value => ({ type: SHOW_MODEL, value })
