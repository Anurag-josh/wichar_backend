const mongoose = require('mongoose');
const crypto = require('crypto');

const medicineSchema = new mongoose.Schema({
    _id: {
        type: String,
        default: () => crypto.randomUUID()
    },
    name: {
        type: String,
        required: true
    },
    times: [{
        timeUTC: {
            type: String, // HH:MM format in UTC
            required: true
        },
        status: {
            type: String,
            enum: ['pending', 'taken', 'missed', 'snoozed'],
            default: 'pending'
        },
        dismissedAt: {
            type: Date,
            default: null
        },
        missedAt: {
            type: Date,
            default: null
        }
    }],
    patientId: {
        type: String,
        ref: 'User',
        required: true
    },
    createdBy: {
        type: String,
        ref: 'User',
        required: true
    },
    scheduledDate: {
        type: String, // YYYY-MM-DD
        required: true
    },
    totalQuantity: {
        type: Number,
        default: 0
    },
    imageUrl: {
        type: String,
        default: null
    },
    startDate: {
        type: Date,
        required: false,
    },
    endDate: {
        type: Date,
        required: false,
    },
    status: {
        type: String,
        enum: ['active', 'completed'],
        default: 'active'
    }
}, {
    timestamps: true // adds createdAt
});

module.exports = mongoose.model('Medicine', medicineSchema);
