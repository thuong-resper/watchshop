// import {
//   call,
//   delay,
//   fork,
//   put,
//   select,
//   take,
//   takeEvery,
//   takeLatest,
// } from "redux-saga/effects";
// import { hideLoading, showLoading } from "../store/actions/ui";
// import { hideModal } from "../store/actions/modal";
// import {
//   addTaskFailed,
//   addTaskSuccess,
//   deleteTaskFailed,
//   deleteTaskSuccess,
//   fetchListTask,
//   fetchListTaskFailed,
//   fetchListTaskSuccess,
//   updateTaskFailed,
//   updateTaskSuccess,
// } from "../store/actions/task";
// import { addTask, deleteTask, getList, updateTask } from "../apis/task";
// import { STATUSES, STATUS_CODE } from "../constants/index";
// import * as taskTypes from "../constants/task";

// /** PROCESS
//  * S!: enforce action fetch data
//  * S2: call api
//  *  > Dispatch action showLoading when loading data
//  * S3: check status code
//  *  > success ->
//  *  > failed ->
//  * S4: enforce next action
//  */

// function* watchFetchListTaskAction() {
//   while (true) {
//     const action = yield take(taskTypes.FETCH_TASK);
//     yield put(showLoading());
//     const { params } = action.payload;
//     //input of call() is a func (call api)

//     yield delay(1000);
//     const res = yield call(getList, params);
//     const { status, data } = res;
//     if (status === STATUS_CODE.SUCCESS) {
//       yield put(fetchListTaskSuccess(data));
//     } else {
//       yield put(fetchListTaskFailed(data));
//     }
//     yield put(hideLoading());
//   }
// }

// function* watchCreateTaskAction() {}

// function* filterTaskSaga({ payload }) {
//   yield delay(500);
//   const { keyword } = payload;
//   yield put(fetchListTask({ q: keyword }));
// }

// function* addTaskSaga({ payload }) {
//   const { title, description } = payload;
//   yield put(showLoading());
//   const resp = yield call(addTask, {
//     title,
//     description,
//     status: STATUSES[0].value,
//   });
//   const { data, status } = resp;
//   if (status === STATUS_CODE.CREATED) {
//     yield put(addTaskSuccess(data));
//     yield put(hideModal());
//   } else {
//     yield put(addTaskFailed(data));
//   }
//   yield delay(1000);
//   yield put(hideLoading());
// }

// function* updateTaskSaga({ payload }) {
//   const { title, description, status } = payload;
//   const taskEditing = yield select((state) => state.task.taskEditing);
//   yield put(showLoading());
//   const resp = yield call(
//     updateTask,
//     { title, description, status },
//     taskEditing.id
//   );
//   const { data, status: statusCode } = resp;
//   if (statusCode === STATUS_CODE.SUCCESS) {
//     yield put(updateTaskSuccess(data));
//     yield put(hideModal());
//   } else {
//     yield put(updateTaskFailed(data));
//   }
//   yield delay(1000);
//   yield put(hideLoading());
// }

// function* deleteTaskSaga({ payload }) {
//   const { id } = payload;
//   yield put(showLoading());
//   const resp = yield call(deleteTask, id);
//   const { data, status: statusCode } = resp; //data of resp from json-server is empty
//   if (statusCode === STATUS_CODE.SUCCESS) {
//     yield put(deleteTaskSuccess(id));
//     yield put(hideModal());
//   } else {
//     yield put(deleteTaskFailed(data));
//   }
//   yield delay(1000);
//   yield put(hideLoading());
// }

// function* rootSaga() {
//   //fork is non-blocking, implement parallel
//   yield fork(watchFetchListTaskAction);
//   yield fork(watchCreateTaskAction);
//   yield takeLatest(taskTypes.FILTER_TASK, filterTaskSaga);
//   yield takeEvery(taskTypes.ADD_TASK, addTaskSaga);
//   yield takeLatest(taskTypes.UPDATE_TASK, updateTaskSaga);
//   yield takeLatest(taskTypes.DELETE_TASK, deleteTaskSaga);
// }

// export default rootSaga;
