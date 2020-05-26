const axios = require('axios');

let token;

const getToken = () => {
    if(token) {
        return token;
    }
    const config = {
        auth: {
            username: process.env.KEY,
            password: process.env.SECRET,
        },
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        }
    }

    const data = 'grant_type=client_credentials';
    return axios
    .post("https://api.twitter.com/oauth2/token", data, config)
    .then(response => {
        token = response.data.acces_token;
        return response.data.access_token;
    })
}
module.exports = { getToken };