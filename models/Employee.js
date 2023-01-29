const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    name: {
        type : String,
        default: null
    },
    designation: {
        type : String,
        default: null 
    },
    grade : {
        type : String,
        default: null
    },
    email : {
        type : String,
        default: null,
        required : true
    },
    mobile : {
        type : String,
        default: null,
        required : true
    },
    department : {
        type : String,
        default: null,
    },
    ctc : {
        type : Number,
        default: 0
    }
});

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;
