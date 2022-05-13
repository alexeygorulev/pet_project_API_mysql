'use strict'

const response = require('../response')
const db = require('../settings/db')

exports.comment = (req, res) => {
    db.query('SELECT * FROM `comment`', (error, rows, fields) => {
        if (error) {
            console.log(error)
        } else {
            response.getStatus(rows, res)
        }
    })
}

exports.addComment = (req, res) => {
    const sql = "INSERT INTO `comment`(`name`, `title` ) VALUES ( '" + req.body[0].name + "' ,'" + req.body[0].title + "')";
    db.query(sql, (error, results) => {
        if (error) {
            console.log(error)
        } else {
            response.createStatus(results, res)
            console.log(res)
        }
    })

}

exports.updateComment = (req, res) => {
    const sql = "UPDATE `comment` SET `id`='" + req.body[0].id + "',`name`='" + req.body[0].name + "',`title`='" + req.body[0].title + "',`date_now`='" + req.body[0].date_now + "' WHERE id = '" + req.body[0].id + "' ;"
    db.query(sql, (error, results) => {
        if (error) {
            console.log(error)
        } else {
            response.createStatus(results, res)
        }
    })
}
exports.deleteComment = (req, res) => {
    const sql = "DELETE FROM `comment` WHERE id = '"+ req.body[0].id +"'"
    db.query(sql, (error, results) => {
        if (error) {
            console.log(error)
        } else {
            response.getStatus(results, res)
        }
    })
}
