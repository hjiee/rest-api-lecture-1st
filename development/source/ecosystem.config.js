module.exports = {
    apps: [
      {
        name: 'lecture',
        script: './bin/www',
        instances: '2',
        autorestart: true,
        watch: false,
        max_memory_restart: '1G',
        env: {
          NODE_ENV: 'development'
        },
        env_production: {
          NODE_ENV: 'production'
        },
        merge_logs: true
        // error_file: './logs/aha-api-err.log',
        // out_file: './logs/aha-api-out.log'
      }
    ],

    deploy: {
        production: {
          key: '~/lecture.pem',
          user: 'ubuntu',
          host: '15.164.163.155',
          ref: 'origin/master',
          repo: 'git@github.com:hjiee/rest-api-lecture-1st.git',
          path: '/home/ubuntu/lecture/development',
          'post-deploy':
            'npm i && npm run build && cd /home/ubuntu/lecture/production && npm i --only=production && pm2 reload ecosystem.config.js --env production'
        }
      }
  }