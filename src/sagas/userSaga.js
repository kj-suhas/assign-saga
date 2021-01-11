import { takeLatest, call, put } from 'redux-saga/effects'
import {
	GET_USERS_SUCCESS,
	GET_USERS_REQUESTED,
	GET_USERS_FAILED,
} from '../actions/types'

// const apiUrl = `https://cors-anywhere.herokuapp.com/https://panorbit.in/api/users.json`
function getApi() {
	return fetch('https://panorbit.in/api/users.json')
		.then(response => response.json())
		.catch(error => {
			throw error
		})
}

function* fetchUsers(action) {
	try {
		const users = yield call(getApi)
		console.log(users)
		yield put({ type: GET_USERS_SUCCESS, users: users })
	} catch (e) {
		yield put({ type: GET_USERS_FAILED, message: e.message })
	}
}

export function* userSaga() {
	yield takeLatest(GET_USERS_REQUESTED, fetchUsers)
}
