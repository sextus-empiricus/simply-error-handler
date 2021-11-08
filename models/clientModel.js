const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Client\'s name is required.'],
        trim: true,
        minlength: [3, 'Minimal length of client\'s name is 3 letter.'],
    },
    surname: {
        type: String,
        required: [true, 'Client\'s surname is required.'],
        trim: true,
        minlength: [3, 'Minimal length of client\'s surname is 3 letter.'],
    },
    email: {
        type: String,
        required: [true, 'Client\'s email address is required.'],
        unique: [true, 'Email address already registered.'],
        trim: true,
        validate: {
            validator: function () {
                return this.email.indexOf('@') !== -1;
            },
            message: 'Check provided email address.'
        }
    },
    tel: {
        type: Number,
        required: [true, 'Client\'s telephone number is required.'],
        validate: {
            validator: function () {
                return (this.tel).toString().length > 9;
            },
            message: 'The phone number must consist of at least 9 numbers.'
        }
    },
    orderId: {
        type: String,
        required: [true, 'Client requires individual ID.'],
        trim: true,
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
    active: {
        type: Boolean,
        default: true
    }
})

const Client = mongoose.model('Client', clientSchema);

module.exports = Client;