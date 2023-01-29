const { INTERNAL_SERVER_ERROR } = require('http-status');
const httpStatus = require('http-status');
const { find } = require('../models/Employee');
const Employee = require('../models/Employee');

const list = async (req,res) => {

    let employees = await Employee.find({});

    return res.status(httpStatus.OK).send({
        code : httpStatus.OK,
        message: 'Data fetched successfully',
        data: employees
    });
}


const createAndUpate = (req, res) => {
    if(req.body._id) {

        const { _id, ...newRequest } = req.body;

       Employee.updateOne({
        '_id' : req.body._id
       }, newRequest, (err, updatedRecord) => {
            if(err) {
                res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
                    code : httpStatus.INTERNAL_SERVER_ERROR,
                    message : 'Something went wrong'
                });
            } else {
                res.status(httpStatus.OK).send({
                    code : httpStatus.OK,
                    message : 'Data updated sucessfully'
                })
            }
       }) 
    } else {
        const employee = new Employee(req.body);
        employee.save().then(
                res.status(httpStatus.OK).send({
                    code : httpStatus.OK,
                    message: 'Data saved successfully'
                }))
                .catch(err => res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
                    code : httpStatus.INTERNAL_SERVER_ERROR,
                    message: err
                }));
    }
}

const destroy = (req,res) => {
    Employee.deleteOne({
        '_id': req.params.id
    }, (err, deleted) => {
        if(err) {
            res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
                code : INTERNAL_SERVER_ERROR,
                message : 'Something went wrong'
            });
        } else {
            res.status(httpStatus.OK).send({
                code : OK,
                message : 'Data deleted successfully'
            });
        }
    })
}
module.exports = {list, createAndUpate, destroy}


