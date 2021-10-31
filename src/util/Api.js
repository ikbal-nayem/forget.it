import axios from 'axios';

export default axios.create({
  baseURL: `http://103.205.180.155:9090`,
  headers: {
    'Content-Type': 'application/json',
  }
});
