module.exports = {
    apps: [{
        name: 'API',
        script: 'app.js',

        // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
        args: 'one two',
        instances: 1,
        autorestart: true,
        watch: false,
        max_memory_restart: '1G',
        env: {
            NODE_ENV: 'development'
        },
        env_production: {
            NODE_ENV: 'production'
        }
    }],

    deploy: {
        production: {
            user: 'node',
            host: '10.41.4.222',
            ref: 'origin/ss80',
            repo: 'git@github.com/Einere/membership-todo.git',
            path: '/var/www/production',
            "pre-setup": "apt-get install git",
            'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env production',
            "env": {
                "NODE_ENV": "production"
            }
        }
    }
};
