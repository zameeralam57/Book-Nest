import axios from "axios";
const newAxios = axios.create({
    baseURL : 'http://localhost:3006',
    timeout : 45000,
    headers : {
        "Content-Type":'application/json'
    },
    withCredentials: true, // Add this if your backend requires credentials (e.g., cookies)
});
export default newAxios;