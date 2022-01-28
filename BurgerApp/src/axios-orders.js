import axios from 'axios';

const ordersInstance = axios.create({
    baseURL: 'https://udemy-react-burger-app-fbe4a-default-rtdb.firebaseio.com/'
});

export default ordersInstance;