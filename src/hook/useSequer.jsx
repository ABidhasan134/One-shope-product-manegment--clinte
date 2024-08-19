import axios from "axios";
const axiosSequer=axios.create({
    baseURL: 'https://one-shope-server.vercel.app/',
    withCredentials: true,
})

const useAxiosSequer=()=>{
    return axiosSequer;
}
export default useAxiosSequer;