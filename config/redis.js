const Config= require("./config.js");
const redis = require('redis');

const client = () => {
    return redis.createClient({
        host: Config.development.REDIS_HOST,
        port: Config.development.REDIS_PORT
    });
};
module.exports = client();