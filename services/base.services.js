// logics go here...
const models = require('../models/crud.modules')
const { log, errorlog, successResponseSender, failureResponseSender } = require('../helpers/helper')

const get = async () => {
    try {
        const result = await models.get()
        console.log(result)
        return result
    } catch (error) {
        console.log(error)
    }
    console.log("hello")
}

const getAllUsers = async () => {
    try {

        const result = await models.getAllRecordFromSql()
        log(result)
        return result

    } catch (error) {

        errorlog(error)
        throw error

    }
}
const getSingleUser = async (req) => {

    try {

        const id = req.params.id
        const result = await models.getRecordFromSql(false, id)
        log(result)
        return result

    } catch (error) {

        errorlog(error)
        throw error

    }

}

const getRoboDetails = async (req) => {

    try {

        const id = req.params.id
        const result = await models.getRecordFromSql(true, id)
        log(result)
        return result

    } catch (error) {

        errorlog(error)
        throw error

    }

}

const updateRoboParam = async (req) => {

    try {


        const result = await models.insertRecordInSql(req)
        log(result)
        return result

    } catch (error) {

        errorlog("asda" + error)
        throw error

    }

}



module.exports = {
    get,
    getAllUsers,
    getSingleUser,
    getRoboDetails,
    updateRoboParam
}