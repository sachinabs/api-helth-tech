const { pool } = require("../config/sql-config")
const { log, errorlog, } = require('../helpers/helper')


const get = () => {
    errorlog("hai")
    console.log("hello");
}

const getAllRecordFromSql = async () => {

    const AllRecordFromSql = new Promise(function (resolve, reject) {

        log("3:model")

        pool.getConnection((err, connection) => {

            if (err) { throw Error(err) }

            connection.query('SELECT * from all_user_list', (err, rows) => {
                connection.release();
                if (!err) {



                    resolve(JSON.stringify(rows));
                } else {

                    reject(err)

                }

            });

        });

    })

    return AllRecordFromSql
}


const getRecordFromSql = async (flag, data) => {

    let query = ""

    if (flag) {
        query = `SELECT * from robo_params WHERE robo_id = '${data}' `
    }
    else {
        query = `SELECT * from all_user_list WHERE p_id = '${data}' `
    }

    const RecordFromSql = new Promise(function (resolve, reject) {

        pool.getConnection((err, connection) => {

            if (err) throw err

            connection.query(query, (err, rows) => {

                connection.release()

                if (!err) {
                    resolve(JSON.stringify(rows))
                } else {
                    reject(err)
                }

            });

        });

    })

    return RecordFromSql
}

const insertRecordInSql = async (req) => {

    const insertRecord = new Promise(function (resolve, reject) {
        const query = `INSERT INTO  updated_robo_params (d_id, gain, zoom_level, system_mode, depth, x,y,robo_id,s_num) VALUES
        ('${req.body.d_id}','${req.body.gain}','${req.body.zoom_level}','${req.body.system_mode}',
        '${req.body.depth}','${req.body.x}','${req.body.y}','${req.body.robo_id}','${req.body.s_num}') `

        pool.getConnection((err, connection) => {

            if (err) throw err

            connection.query(query, (err, result) => {

                connection.release()

                if (!err) {
                    resolve("data inserted")
                } else {
                    reject(err)
                }

            });

        });

    })

    return insertRecord
}



module.exports = {
    get,
    getAllRecordFromSql,
    getRecordFromSql,
    insertRecordInSql
}