const status = require('../helpers/http-status')
const _ = require('lodash');
const clientMysql = require('./Mysql')

class DegreeController {
    async create(req, res) {
        const data = req.body
        const susNumber = _.get(data, 'susNumber')
        const citizen = await clientMysql.citizens.findByPk(susNumber)
        if (citizen) {
            const degree = await clientMysql.degrees.create({
                level: _.get(data, 'level'),
                citizenSusNumber: _.get(citizen, 'dataValues.susNumber')
            })
            if (degree) {
                return res.send({
                    status: status.success,
                    "degree registered": degree
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

    async delete(req, res) {
        try {
            const id = req.params.id
            const degree = await clientMysql.degrees.destroy({
                where: {
                    id
                }
            })
            if (degree) return res.send({
                status: status.sucess,
                "degree removed": degree
            })
            else return res.send(status.not_found)
        } catch (error) {
            return res.send(status.server_error)
        }
    }
}

module.exports = new DegreeController()