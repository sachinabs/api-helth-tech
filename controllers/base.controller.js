// response to client
const service = require('../services/base.services')

const { log, errorlog, successResponseSender, failureResponseSender } = require('../helpers/helper')


const get = async (req, res) => {
    try {
        const result = await service.get()
        console.log(result);
        successResponseSender(res, result)
    } catch (error) {
        failureResponseSender(res, error)
    }
}

const getAllUser = async (req, res) => {

    try {

        const result = await service.getAllUsers(req)
        successResponseSender(res, result)
        log(result)

    } catch (error) {

        failureResponseSender(res, error)
        errorlog(error)

    }

}

const getSingleUser = async (req, res) => {

    try {

        const result = await service.getSingleUser(req)
        successResponseSender(res, result)
        log(result)

    } catch (error) {

        failureResponseSender(res, error)
        log(error)
        errorlog(error);

    }

}

const getRoboDetails = async (req, res) => {

    try {

        const result = await service.getRoboDetails(req)
        successResponseSender(res, result)
        log(result)

    } catch (error) {

        failureResponseSender(res, error)
        errorlog(error);

    }

}

const updateRoboParam = async (req, res) => {

    try {

        const result = await service.updateRoboParam(req)
        successResponseSender(res, result)
        log(result)

    } catch (error) {

        failureResponseSender(res, error)
        errorlog(error);

    }

}




module.exports = {
    get,
    getAllUser,
    getSingleUser,
    getRoboDetails,
    updateRoboParam,
}