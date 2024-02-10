require('dotenv').config();

export default {
    login: {
        username: process.env.USER_NAME ?? `admin`,
        password: process.env.USER_PASS ?? `admin`,
    }
}