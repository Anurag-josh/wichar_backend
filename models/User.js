const mongoose = require('mongoose');
const crypto = require('crypto');

const userSchema = new mongoose.Schema({
    _id: {
        type: String,
        default: () => crypto.randomUUID()
    },
    name: {
        type: String,
        required: true
    },
    language: {
        type: String,
        default: 'en'
    },
    role: {
        type: String,
        enum: ['patient', 'caregiver'],
        required: true
    },
    linkCode: {
        type: String,
        required: true,
        unique: true
    },
    linkedUsers: [{
        type: String,
        ref: 'User'
    }],
    country: {
        type: String,
        default: "India"
    },
    timezone: {
        type: String,
        default: "Asia/Kolkata"
    }
}, {
    timestamps: true // adds createdAt and updatedAt
});

module.exports = mongoose.model('User', userSchema);
