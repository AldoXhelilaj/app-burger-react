import axios from 'axios';

const instance= axios.create({
    baseURL:'https://react-app-burger-d3f4f.firebaseio.com/'
})

export default instance;