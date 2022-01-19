const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateCommentInput(data) {
    let errors = {}; 
    debugger
    
    data.body = validText(data.body) ? data.body : '';
    
    if (!Validator.isLength(data.body, { min: 2, max: 100 })) {
        errors.body = 'Comment must be between 2 and 100 characters'
    }

    if (Validator.isEmpty(data.body)) {
        errors.body = 'Comment field is required';
    }

    return {
        errors,
        isValid: Object.keys(errors).length
    }

}
