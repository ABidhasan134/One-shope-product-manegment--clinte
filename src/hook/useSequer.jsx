import axios from "axios";
const axiosSequer=axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true,
})

const useAxiosSequer=()=>{
    return axiosSequer;
}
export default useAxiosSequer;