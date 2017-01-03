console.log("--running publish--");

const ghpages = require('gh-pages');
const path = require('path');
const date = new Date();

ghpages.publish(path.resolve(__dirname + '/../docs'), {
  message: `[ci skip] deployment (${date.getUTCFullYear()}-${date.getUTCMonth()+1}-${date.getUTCDate()}-${date.getUTCHours()}-${date.getUTCMinutes()})`,

  /** Branch */
  branch: 'gh-pages',
  repo: 'https://' + process.env.GH_TOKEN + '@github.com/basarat/eze.git',

  /** User */
  user: {
    name: 'basarat',
    email: 'basarat@example.com'
  }
}, (err) => {
  if (err) {
    console.log('--publish failed!--', err)
    return;
  }
  console.log("--publish done--");
});
