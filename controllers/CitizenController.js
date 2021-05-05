const CitizenModel = require('../models/citizen')
const status = require('../helpers/http-status')
const _ = require('lodash');
const clientMysql = require('./Mysql')


class CitizenController {
    async create(req, res) {
        const data = req.body
        const citizen = await clientMysql.citizens.create(data)
        return citizen
    }

    async update(req, res) { }

    async show(req, res) { }

    async delete(req, res) { }


}

module.exports = new CitizenController()