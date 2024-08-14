import axios from 'axios';

export const itunesAPI = axios.create({
  baseURL: 'https://itunes.apple.com',
});
