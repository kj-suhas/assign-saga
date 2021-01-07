import { GET_USERS_REQUESTED } from './types'

export function getUsers() {
	return {
		type: GET_USERS_REQUESTED,
	}
}

// export const fetchUsers = () => dispatch => {
// 	fetch('https://panorbit.in/api/users.json')
// 		.then(res => res.json())
// 		.then(data =>
// 			dispatch({
// 				type: FETCH_USERS,
// 				payload: data,
// 			})
// 		)
// }

// export const loginUser = user => dispatch => {
// 	dispatch({
// 		type: LOGIN_USER,
// 		payload: user,
// 	})
// }

// export const headerChange = header => dispatch => {
// 	dispatch({
// 		type: CHANGE_HEADER,
// 		payload: header,
// 	})
// }
