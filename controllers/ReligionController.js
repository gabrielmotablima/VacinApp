const status = require('../helpers/http-status')
const _ = require('lodash');
const clientMysql = require('./Mysql')

class ReligionController {
    async create(req, res) {
        const data = req.body
        const susNumber = _.get(data, 'susNumber')
        const citizen = await clientMysql.citizens.findByPk(susNumber)
        if (citizen) {
            const religion = await clientMysql.religions.create({
                description: _.get(data, 'description'),
                citizenSusNumber: _.get(citizen, 'dataValues.susNumber')
            })
            if (religion) {
                return res.send({
                    status: status.success,
                    "religion registered": religion
                })
            }
        }
        else {
            return res.send({
                status: status.not_found
            })
        }
    }

    async update(req, res) { }

    async show(req, res) { }

    async getAll(req, res) { }

    async delete(req, res) { }

}

module.exports = new ReligionController()