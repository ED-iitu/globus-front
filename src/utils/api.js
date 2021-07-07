import axios from 'axios';
import { API_URL } from './env';

// http://94.247.128.142/api/v1/facilities

export default axios.create({
  baseURL: `${API_URL}/api/v1`
});