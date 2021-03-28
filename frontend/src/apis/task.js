import qs from "query-string";
import axiosService from "../commons/axiosService";
import { API_ENDPOINT } from "../constants";

// const url = "tasks";

// export const getList = (params = {}) => {
//   let queryParams = "";
//   if (Object.keys(params).length > 0) {
//     queryParams = `?${qs.stringify(params)}`;
//   }
//   return axiosService.get(`${API_ENDPOINT}/${url}${queryParams}.json`);
// };

// export const addTask = (data) => {
//   return axiosService.post(`${API_ENDPOINT}/${url}.json`, data);
// };

// export const updateTask = (data, id) => {
//   return axiosService.put(`${API_ENDPOINT}/${url}/${id}.json`, data);
// };

// export const deleteTask = (id) => {
//   return axiosService.delete(`${API_ENDPOINT}/${url}/${id}.json`);
// };
