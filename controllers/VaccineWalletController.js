const CitizenModel = require('../models/citizen')
const status = require('../helpers/http-status')
const _ = require('lodash');
const clientMysql = require('./Mysql')

class VaccineWalletController {

    async create(req, res) {
        const data = req.body
        const susNumber = _.get(data, 'susNumber')
        const citizen = await clientMysql.citizens.findByPk(susNumber)
        
        if (citizen) {
            const vaccineWallet = await clientMysql.vaccineWallets.create({
                citizenSusNumber: _.get(citizen, 'dataValues.susNumber'),
                date: _.get(data, 'date'),
                nextDate: _.get(data, 'nextDate'),
            })
            if (vaccineWallet) {
                return res.send({
                    status: status.success,
                    "vaccine wallet registered": vaccineWallet
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

    async getAll(req, res){}

    async delete(req, res) { }


}

module.exports = new VaccineWalletController()