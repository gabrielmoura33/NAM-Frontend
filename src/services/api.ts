import axios from 'axios';

const api = axios.create({
  baseURL: 'https://nam-backend.gabrielmoura.website/',
});

export default api;
