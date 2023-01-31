import axios from "axios";


const url = 'https://8000-john913052-algo2c-4inhxyga5u4.ws-us84.gitpod.io/signup'
const authenticateSignup = async (signupdata1) => {
    // const url = 'http://localhost:8000'
    try {
        return await axios.post(url, signupdata1);
    } catch (error) {
        console.log(error)
    }
}
export { authenticateSignup }
