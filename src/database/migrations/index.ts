const db = require('../connection')
const CreateUsers = require('../migrations/createUsers')
const CreateTransaction = require('../migrations/createTransactions')
const CreateAccounts = require('../migrations/createAccounts')

async function MigrationRun() {
    const schemas = [
        CreateUsers,
        CreateTransaction,
        CreateAccounts
    ].join('')

    db().then(db => db.exec(schemas))
    .catch(error => console.error(error))
}

module.exports = MigrationRun