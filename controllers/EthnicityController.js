const status = require('../helpers/http-status')
const _ = require('lodash');
const clientMysql = require('./Mysql')

class EthnicityController {

    /**
     * funcionando
     * @param {} req 
     * @param {*} res 
     * @returns 
     */
    async create(req, res) {
        const data = req.body
        const susNumber = _.get(data, 'susNumber')
        const citizen = await clientMysql.citizens.findByPk(susNumber)
        if (citizen) {
            const ethnicity = await clientMysql.ethnicitys.create({
                description: _.get(data, 'description'),
                citizenSusNumber: _.get(citizen, 'dataValues.susNumber')
            })
            if (ethnicity) {
                return res.send({
                    status: status.success,
                    "ethnicity registered": ethnicity
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
            const ethnicity = await clientMysql.ethnicitys.destroy({
                where: {
                    id
                }
            })
            if (ethnicity) return res.send({
                status: status.sucess,
                "ethnicity removed": ethnicity
            })
            else return res.send(status.not_found)
        } catch (error) {
            return res.send(status.server_error)
        }
    }

}

module.exports = new EthnicityController()