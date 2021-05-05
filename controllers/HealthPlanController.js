const HealthPlanModel = require('../models/healthPlan')
const status = require('../helpers/http-status')
const _ = require('lodash');

class HealthPlanController {

    async create(req, res) { 
        const data = req.body
    }

    async update(req, res) { }

    async show(req, res) { }

    async getAll(req, res){}

    async delete(req, res) { }
}

module.exports = new HealthPlanController()