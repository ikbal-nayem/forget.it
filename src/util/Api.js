import axios from 'axios';

export default axios.create({
  // baseURL: `http://103.205.180.155:9090`,
  // baseURL: `https://forgetit.pythonanywhere.com`,
  baseURL: `http://127.0.0.1:8000`,
  headers: {
    'Content-Type': 'application/json',
  }
});
