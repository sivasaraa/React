import axios from 'axios';

export default axios.create({
    baseURL : 'https://api.unsplash.com',
    headers : {
        Authorization: 'Client-ID 42b4d66456b35aacbb72dc282664ed9fcebd545e102e82c0af6d946daabbddb7'
    } 
});