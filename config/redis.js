const Config= require("./config.js");
const redis = require('redis');

const client = () => {
    return redis.createClient('redis://kuetedonald:123@Donald@redis-15074.c289.us-west-1-2.ec2.cloud.redislabs.com:15074', {
        host: Config.development.REDIS_HOST,
        port: Config.development.REDIS_PORT,
    });
};
module.exports = client();