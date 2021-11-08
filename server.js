const chalk = require('chalk');
const app = require('./app.js');
require('dotenv').config({path: './.env'});
require('./db/db.js');

const port = 3000 || process.env.PORT;

app.listen(port, 'localhost', () => {
    console.log(chalk.grey('project:'),chalk.magenta('simpleCRM\n'), chalk.green('✔ '), chalk.gray(`- listening on ${port}...`));
})