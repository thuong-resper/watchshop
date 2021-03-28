import axios from "axios";

class axiosService {
  constructor() {
    const instant = axios.create();
    instant.interceptors.response.use(this.handleSuccess, this.handleError);
    this.instant = instant;
  }

  handleSuccess(res) {
    return res;
  }

  handleError(err) {
    return Promise.reject(err);
  }

  get(url) {
    return this.instant.get(url);
  }

  post(url, body) {
    return this.instant.post(url, body);
  }

  put(url, body) {
    return this.instant.put(url, body);
  }

  delete(url) {
    return this.instant.delete(url);
  }
}

export default new axiosService();
