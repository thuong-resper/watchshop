// import {
//   AUTH_CHECK_STATE,
//   AUTH_CHECK_TIMEOUT,
//   AUTH_FAIL,
//   AUTH_INITIATE_LOGOUT,
//   AUTH_LOGOUT,
//   AUTH_START,
//   AUTH_SUCCESS,
//   AUTH_USER,
//   SET_AUTH_REDIRECT_PATH,
// } from "../../constants/userConstants";

// export const authStart = () => {
//   return {
//     type: AUTH_START,
//   };
// };

// export const authSuccess = (token, userId, userName) => {
//   return {
//     type: AUTH_SUCCESS,
//     idToken: token,
//     userId: userId,
//     userName: userName,
//   };
// };

// export const authFail = (error) => {
//   return {
//     type: AUTH_FAIL,
//     error: error,
//   };
// };

// export const logout = () => {
//   // localStorage.removeItem('token');
//   // localStorage.removeItem('expirationDate');
//   // localStorage.removeItem('userId');
//   return {
//     type: AUTH_INITIATE_LOGOUT,
//   };
// };

// export const logoutSucceed = () => {
//   return {
//     type: AUTH_LOGOUT,
//   };
// };

// export const checkAuthTimeout = (expirationTime) => {
//   return {
//     type: AUTH_CHECK_TIMEOUT,
//     expirationTime: expirationTime,
//   };
// };

// export const auth = (email, password, isSignup) => {
//   return {
//     type: AUTH_USER,
//     email: email,
//     password: password,
//     isSignup: isSignup,
//   };
// };

// export const setAuthRedirectPath = (path) => {
//   return {
//     type: SET_AUTH_REDIRECT_PATH,
//     path: path,
//   };
// };

// export const authCheckState = () => {
//   return {
//     type: AUTH_CHECK_STATE,
//   };
// };
