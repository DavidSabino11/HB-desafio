import axios from 'axios';
import md5 from 'md5';

const publicKey = 'b25381064818160648bc0b302ac4c4ba';
const privateKey = '9212ab960327b0a0a738d72bbd32fed627bee2d6';

const time = Number(new Date());

const hash = publicKey && privateKey ? md5(time + privateKey + publicKey) : '';

export const authKey = `&ts=${time}&apikey=${publicKey}&hash=${hash}`;

const api = axios.create({
  baseURL: 'https://gateway.marvel.com/v1/public/',
});

export default api;
