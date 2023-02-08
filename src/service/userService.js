import axios from "axios";

export default class UserService{
    baseUrl = 'http://localhost/user';

    async user(data){
        var response = await axios.post('/user/create', data)
        console.log('567890')
        console.log(data)
        return response.data;
    }
}