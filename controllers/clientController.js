const {v4: uuid} = require('uuid');
const Client = require('../models/clientModel.js');
const catchAsync = require('../utils/catchAsync.js');

exports.getAll = async (req, res, next) => {
    try {
        const clients = await Client.find({});
        res.status(200).json({
            status: 'success',
            results: clients.length,
            data: clients
        })
    } catch (err) {
        res.status(404).json({
            status: 'failed',
            message: err.message
        })
    }
}

exports.create = catchAsync(async (req, res, next) => {
    const orderId = uuid();
    const newClient = await Client.create({...req.body, orderId});
    res.status(201).json({
        status: 'success',
        data: newClient
    })
})

exports.getOne = async (req, res, next) => {
    try {
        const client = await Client.findById(req.params.id);
        res.status(200).json({
            status: 'success',
            data: client
        })
    } catch (err) {
        res.status(404).json({
            status: 'failed',
            message: err.message
        })
    }
}

exports.update = async (req, res, next) => {
    try {
        const updatedClient = await Client.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.status(200).json({
            status: 'success',
            data: updatedClient
        })
    } catch (err) {
        res.status(404).json({
            status: 'failed',
            message: err.message
        })
    }
}

exports.deleteOne = async (req, res, next) => {
    try {
        await Client.findByIdAndDelete(req.params.id);
        res.status(204).json({
            status: 'success',
        })
    } catch (err) {
        res.status(404).json({
            status: 'failed',
            message: err.message
        })
    }
}

exports.deleteAll = async (req, res, next) => {
    try {
        await Client.deleteMany({});
        res.status(204).json({
            status: 'success',
        })
    } catch (err) {
        res.status(404).json({
            status: 'failed',
            message: err.message
        })
    }
}