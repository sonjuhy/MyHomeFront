import axios from 'axios';

const serverAxios = axios.create({
  baseURL: process.env.REACT_APP_SERVER_ADDRESS,
});

export default serverAxios;
