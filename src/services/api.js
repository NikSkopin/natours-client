import axios from 'axios';

export default () => {
  const url = axios.create({
    baseURL: 'http://localhost:3000/api/v1/',
  });
  return url;
};
