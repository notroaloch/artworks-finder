import axios from 'axios';

const itunesAPI = axios.create({
	baseURL: 'https://itunes.apple.com',
});

export default itunesAPI;
