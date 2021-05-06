const status = require('../helpers/http-status')
const _ = require('lodash');
const clientMysql = require('./Mysql')

class ReligionController {
    
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

    /**
     * funcionando
     * @param {} req 
     * @param {*} res 
     * @returns 
     */
    async delete(req, res) {
        try {
            const id = req.params.id
            const religion = await clientMysql.religions.destroy({
                where: {
                    id
                }
            })
            if (religion) return res.send({
                status: status.sucess,
                "religion removed": religion
            })
            else return res.send(status.not_found)
        } catch (error) {
            return res.send(status.server_error)
        }
    }
}

module.exports = new ReligionController()