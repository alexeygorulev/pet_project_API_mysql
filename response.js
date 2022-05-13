'use strict'

const {response} = require("express");
exports.getStatus = (value, res) => {
    const data = {
        "status": 200,
        "values": value,
    }
    res.json(data)
    res.end
}
exports.createStatus = (value, res) => {
    const data = {
        "status": 201,
        "values": value
    }
    response.statusCode = 201
    res.json(data)
    res.end
}