import axios from 'axios';


// http://94.247.128.142/api/v1/facilities

export default axios.create({
  baseURL: `https://kino.kz/api/cinema/`
});