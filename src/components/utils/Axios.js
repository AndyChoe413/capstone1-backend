import axios from 'axios'
//sets up our server request to axios and checks whether its development or not with a timeout
const Axios = axios.create({
    baseURL:
        process.env.NODE_ENV === "development"
            ? "http://localhost:3001"
            : "DEPLOY CLOUD ADDRESS",
    timeout: 50000,
})

export default Axios;