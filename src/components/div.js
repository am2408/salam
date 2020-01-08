import axios from 'axios';

const API_KEY = 'ad42c7ad44642e6885b5ed4803ae42cb';

export function article() {
    return axios.get('https://jsonplaceholder.typicode.com/photos')
        .then((response)=>{
            return response.data;
        })
        .catch((error)=>{
            console.log(error);
        })
}
