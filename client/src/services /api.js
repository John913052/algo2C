import axios from "axios"

const authenticateSignup = async (signupdata1) => {
    const url = 'https://5000-john913052-algo2c-4inhxyga5u4.ws-us84.gitpod.io'
    try {
        return await axios.post(`${url}/signup`, signupdata1)
    } catch (error) {
        console.log(error)
    }
}
export { authenticateSignup }