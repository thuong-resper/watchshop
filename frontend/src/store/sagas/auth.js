import { put, delay, call } from "redux-saga/effects";
import axios from "axios";

import * as actions from "../actions/index";

export function* logoutSaga(action) {
  yield call([localStorage, "removeItem"], "userId");
  yield call([localStorage, "removeItem"], "token");
  yield call([localStorage, "removeItem"], "userName");
  yield call([localStorage, "removeItem"], "expirationDate");
  yield put(actions.logoutSucceed());
}

export function* checkAuthTimeoutSaga(action) {
  yield delay(action.expirationTime);
  yield put(actions.logout());
}

export function* authUserSaga(action) {
  yield put(actions.authStart());
  const authData = {
    email: action.email,
    password: action.password,
    returnSecureToken: true,
  };
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  let url = "/api/users/login";
  if (!action.isSignup) {
    url = "/api/users/login";
  }
  try {
    const response = yield axios.post(url, authData, config);
    const expirationDate = yield new Date(
      new Date().getTime() + response.data.expiresIn
      //expiration time response from backend
    );
    localStorage.setItem("userInfo", JSON.stringify(response.data));
    localStorage.setItem("expirationDate", JSON.stringify(expirationDate));
    yield put(
      actions.authSuccess(
        response.data.token,
        response.data._id,
        response.data.name
      )
    );
    yield put(actions.checkAuthTimeout(response.data.expiresIn));
  } catch (error) {
    yield put(actions.authFail(error.response.data.message));
  }
}

export function* authCheckStateSaga(action) {
  const token = yield localStorage.getItem("token");
  if (!token) {
    yield put(actions.logout());
  } else {
    const expirationDate = yield new Date(
      localStorage.getItem("expirationDate")
    );
    if (expirationDate <= new Date()) {
      yield put(actions.logout());
    } else {
      const userId = yield localStorage.getItem("userId");
      yield put(actions.authSuccess(token, userId));
      yield put(
        actions.checkAuthTimeout(
          expirationDate.getTime() - new Date().getTime()
        )
      );
    }
  }
}
