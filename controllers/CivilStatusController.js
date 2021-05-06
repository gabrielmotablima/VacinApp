const status = require('../helpers/http-status')
const _ = require('lodash');
const clientMysql = require('./Mysql')

class CivilStatusController {

    async create(req, res) {
        const data = req.body
        const susNumber = _.get(data, 'susNumber')
        const citizen = await clientMysql.citizens.findByPk(susNumber)
        if (citizen) {
            const civilStatus = await clientMysql.civilStatus.create({
                description: _.get(data, 'description'),
                citizenSusNumber: _.get(citizen, 'dataValues.susNumber')
            })
            if (civilStatus) {
                return res.send({
                    status: status.success,
                    "civilStatus registered": civilStatus
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

module.exports = new CivilStatusController()