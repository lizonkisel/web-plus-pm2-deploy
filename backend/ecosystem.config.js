const dotenv = require('dotenv');
dotenv.config({ path: ".env.deploy" });

const { USER, HOST, REF, REPO, MYPATH } = process.env;

// console.log(process.env);
// console.log(MYPATH);

module.exports = {
  apps : [{
    name   : "backend",
    script : "./dist/app.js",
    cwd    : "/home/ees-hwork/web-plus-pm2-deploy/source/backend/"
  }
  ],
  // Настройка деплоя
  deploy: {
    production: {
      // user: 'ees-hwork',
      user: USER,
      host: HOST,
      ref: REF,
      repo: REPO,
      path: MYPATH,
      // host: "158.160.25.121",
      // ref: "master",
      // repo: "https://github.com/lizonkisel/web-plus-pm2-deploy.git",
      // path: "/home/ees-hwork/web-plus-pm2-deploy/",
      // 'pre-deploy-local': `scp.exe backend/.env.deploy ees-hwork@158.160.25.121:/home/ees-hwork/`,
      // 'post-deploy': `cd backend && npm i && npm run build && pm2 startOrRestart /home/ees-hwork/web-plus-pm2-deploy/backend/ecosystem.config.js`,
      'pre-deploy-local': `bash scripts/deployEnv.sh ${USER}@${HOST} ${MYPATH}`,
      'post-deploy': `cd backend && npm i && npm run build && pm2 startOrRestart ${MYPATH}/current/backend/ecosystem.config.js && pm2 save`,
    }
  }
}
