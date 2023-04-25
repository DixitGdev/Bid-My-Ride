

import Axios from "axios";

const token = localStorage.getItem("token");

const axios = Axios.create({
    baseURL: process.env.SERVER_BASE_URL || "https://bid-my-ride-server.onrender.com",
    headers: {
        "x-access-token": token,
    },
});

export default axios;
