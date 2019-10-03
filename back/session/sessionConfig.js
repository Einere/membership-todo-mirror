const uuid = require('uuid/v4');

const sessionConfig = (RedisStore, redisClient) => {
    return {
        genid: () => uuid(),
        name: 'membership',
        secret: 'boostcamp-membership',
        resave: false,
        saveUninitialized: true,
        cookie: {
            httpOnly: true,
            secure: true
        },
        unset: 'destroy',
        store: new RedisStore({
            host: process.env.DB_REDIS_HOST,
            port: process.env.DB_REDIS_PORT,
            client: redisClient,
            ttl: 60 * 60 * 24 * 14
        }),
    };
};

module.exports = sessionConfig;
