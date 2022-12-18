
const handle = require('../config/production.json');

const log = (logMessage) => {
    // if (handle.mode) {
    // }
    // else {
    //     return console.log(`📨 ${logMessage}`)
    // }
    if (!handle.mode) return console.log(`📨 ${logMessage}`)
}

const errorlog = (errorMessage) => {
    return console.error(`🐞 ${errorMessage}`)
}

const successResponseSender = (res, result) => {
    res.status(200).send(result);
}

const failureResponseSender = (res, error) => {
    res.status(500).send({
        error: error
    });
}


module.exports = {
    log,
    errorlog,
    successResponseSender,
    failureResponseSender
}