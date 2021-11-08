const mongoose = require('mongoose');
const chalk = require('chalk');

const db = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.75c0l.mongodb.net/simply-CRM?retryWrites=true&w=majority`;

mongoose.connect(db, (err) => {
    if (err) return console.log(chalk.red(' ❌ '),chalk.grey('- can not connect database'))
    console.log(chalk.green(' ✔ '),chalk.grey('- database connected'))
})

module.exports = mongoose;