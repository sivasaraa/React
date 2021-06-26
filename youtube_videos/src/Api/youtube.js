import axios from 'axios';

const KEY = 'AIzaSyDqRax2W9F-RDpxg04UGtSO0CgTxJzDKI4'

export default axios.create({
    baseURL : 'https://www.googleapis.com/youtube/v3',
    params : {
        part : 'snippet',
        maxResults : 5,
        key : KEY
    }
});