import axios from 'axios';

const serverAxios = axios.create({
  baseURL: process.env.SERVER_ADRESS,
});

export default serverAxios;
