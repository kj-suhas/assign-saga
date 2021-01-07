import { all } from 'redux-saga/effects'

import { userSaga } from './userSaga'

export default function* RootSaga() {
	yield all([userSaga()])
}
