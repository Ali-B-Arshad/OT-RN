import {all, put, takeLatest, take} from 'redux-saga/effects';

import {
  loginSuccess,
  loginFailure,
  signupSuccess,
  signupFailure,
} from '../../actions';

function* loginRequest(obj) {
  console.log('loginRequest Generator Function Called');
  //   const response = yield doPostAws(
  //     obj.data,
  //     'url',
  //   );
  //console.log('Login Request Working', response);
  const response = {status: 'Success Code', userId: 1};
  if (response.status === 'Success Code') {
    yield put(loginSuccess(response));
  } else if (response.status === 'Failure Code') {
    yield put(loginFaliure(response));
  } else {
    yield put(loginFaliure(response));
  }
}

function* signupRequest(obj) {
  console.log('SignUp Generator Function running');
  //   const response = yield doPost(obj.data, 'url');
  //   console.log('Sign up Api response', response);
  const response = {status: 'Success Code', id: 1};

  if (response.status === 'Success Code') {
    yield put(signupSuccess(response));
  } else if (response.status === 'Failure Code') {
    yield put(signupFailure(response));
  } else {
    yield put(signupFailure(response));
  }
}

export default function* watcher() {
  yield all([takeLatest('LOGIN_REQUEST', loginRequest)]);
  yield all([takeLatest('SIGNUP_REQUEST', signupRequest)]);
}
