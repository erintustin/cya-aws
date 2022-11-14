const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const noteSchema = new Schema({
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    text: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const resourceSchema = new Schema({
    id: {
        type: Number
    },
    name: {
        type: String,
        required: true,
        unique: true
    },
    author: {
        type: String,
        required: true
    },
    source: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    tagged: [{
        type: String,
        required: false
    }],
    featured: {
        type: Boolean,
        required: false
    }, 

    notes: [noteSchema]
    }, {
    timestamps: true
});

const Resource = mongoose.model('Resource', resourceSchema);

module.exports = Resource;