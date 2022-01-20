const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validatePostInput(data) {
    let errors = {};
    

    data.address = validText(data.address) ? data.address : '';

    if (!Validator.isLength(data.address, { min: 15, max: 50 })) {
        errors.address = 'Address must be between 15 and 50 characters';
    }

    if (Validator.isEmpty(data.address)) {
        errors.address = 'Address field is required';
    }
    data.body = validText(data.body) ? data.body : '';

    if (!Validator.isLength(data.body, { min: 10, max: 50 })) {
        errors.body = 'Body must be between 10 and 50 characters';
    }

    if (Validator.isEmpty(data.body)) {
        errors.body = 'Body field is required';
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };
};