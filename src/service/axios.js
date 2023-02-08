import axios from 'axios';

//Add common headers
axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common['Accept'] = 'application/json';
axios.defaults.baseURL = 'http://localhost';

//Export axios
export default axios;