//Action Types
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const SIGNUP_REQUEST = 'SIGNUP_REQUEST';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';

//Login Request Actions
export const loginRequest = (obj) => ({
  type: LOGIN_REQUEST,
  data: obj,
});

export const loginSuccess = (response) => ({
  type: LOGIN_SUCCESS,
  data: response,
});
export const loginFailure = (response) => ({
  type: LOGIN_FAILURE,
  data: {
    ...response,
  },
});

//Signup Request Actions
export const signupRequest = (obj) => ({
  type: SIGNUP_REQUEST,
  data: obj,
});

export const signupSuccess = (response) => ({
  type: SIGNUP_SUCCESS,
  data: response,
});
export const signupFailure = (response) => ({
  type: SIGNUP_FAILURE,
  data: response,
});
