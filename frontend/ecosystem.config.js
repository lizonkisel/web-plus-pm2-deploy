const dotenv = require('dotenv');
dotenv.config({ path: ".env.deploy" });

const { USER, HOST, REF, REPO, MYPATH } = process.env;

// console.log(process.env);
// console.log(MYPATH);

module.exports = {
  // Настройка деплоя
  deploy: {
    production: {
      user: USER,
      host: HOST,
      ref: REF,
      repo: REPO,
      path: MYPATH,
      'post-deploy': `cd frontend && npm i && npm run build`,
    }
  }
}
