import axios from 'axios';

const baseUrl = 'http://www.omdbapi.com/?apikey=bab254d4&i=';

export const apiCall = (url, data, headers, method)=> axios({

    method,
    url: baseUrl + url,
    data, 
    headers
});
