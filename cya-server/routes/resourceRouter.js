const express = require('express');
const Resource = require('../models/resource');
const authenticate = require('../authenticate');
const cors = require('./cors');

const resourceRouter = express.Router();

resourceRouter.route('/')
.options(cors.corsWithOptions, (req, res) => res.sendStatus(200))
.get(cors.cors, (req, res, next) => {
    Resource.find()
    .populate('notes.author')
    .then(resources => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resources);
    })
    .catch(err => next(err));
})
.post(cors.corsWithOptions, authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {
    Resource.create(req.body)
    .then(resource => {
        console.log('Resource Created ', resource);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resource);
    })
    .catch(err => next(err));
})
.put(cors.corsWithOptions, authenticate.verifyUser, authenticate.verifyAdmin, (req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /resources');
})
.delete(cors.corsWithOptions, authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {
    Resources.deleteMany()
    .then(response => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(response);
    })
    .catch(err => next(err));
});

resourceRouter.route('/:resourceId')
.options(cors.corsWithOptions, (req, res) => res.sendStatus(200))
.get(cors.cors, (req, res, next) => {
    Resource.findById(req.params.resourceId)
    .populate('notes.author')
    .then(resource => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resource);
    })
    .catch(err => next(err));
})
.post(cors.corsWithOptions, authenticate.verifyUser, authenticate.verifyAdmin, (req, res) => {
    res.statusCode = 403;
    res.end(`POST operation not supported on /resources/${req.params.resourceId}`);
})
.put(cors.corsWithOptions, authenticate.verifyUser, authenticate.verifyAdmin, (req, res) => {
    Resource.findByIdAndUpdate(req.params.resourceId, {
        $set: req.body
    }, { new: true })
    .then(resource => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resource);
    })
    .catch(err => next(err));
})
.delete(cors.corsWithOptions, authenticate.verifyUser, authenticate.verifyAdmin, (req, res) => {
    Resource.findByIdAndDelete(req.params.resourceId)
    .then(response => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(response);
    })
    .catch(err => next(err));
});

resourceRouter.route('/:resourceId/notes')
.options(cors.corsWithOptions, (req, res) => res.sendStatus(200))
.get(cors.cors, (req, res, next) => {
    Resource.findById(req.params.resourceId)
    .populate('notes.author')
    .then(resource => {
        if (resource) {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(resource.notes);
        } else {
            err = new Error(`Resource ${req.params.resourceId} not found`);
            err.status = 404;
            return next(err);
        }
    })
    .catch(err => next(err));
})
.post(cors.corsWithOptions, authenticate.verifyUser, (req, res, next) => {
    Resource.findById(req.params.resourceId)
    .then(resource => {
        if (resource) {
            req.body.author = req.user._id;
            resource.notes.push(req.body);
            resource.save()
            .then(resource => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(resource);
            })
            .catch(err => next(err));
        } else {
            err = new Error(`Resource ${req.params.resourceId} not found`);
            err.status = 404;
            return next(err);
        }
    })
    .catch(err => next(err));
})
.put(cors.corsWithOptions, authenticate.verifyUser, (req, res, next) => {
    res.statusCode = 403;
    res.end(`PUT operation not supported on /resources/${req.params.resourceId}/notes`);
})
.delete(cors.corsWithOptions, authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {
    Resource.findById(req.params.resourceId)
    .then(resource => {
        if (resource) {
            for (let i = (resource.notes.length-1); i >= 0; i--) {
                resource.notes.id(resource.notes[i]._id).remove();
            }
            resource.save()
            .then(resource => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(resource);
            })
            .catch(err => next(err));
        } else {
            err = new Error(`Resource ${req.params.resourceId} not found`);
            err.status = 404;
            return next(err);
        }
    })
    .catch(err => next(err));
});

resourceRouter.route('/:resourceId/notes/:noteId')
.options(cors.corsWithOptions, (req, res) => res.sendStatus(200))
.get(cors.cors, (req, res, next) => {
    Resource.findById(req.params.resourceId)
    .populate('notes.author')
    .then(resource => {
        if (resource && resource.notes.id(req.params.noteId)) {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(resource.notes.id(req.params.noteId));
        } else if (!resource) {
            err = new Error(`Resource ${req.params.resourceId} not found`);
            err.status = 404;
            return next(err);
        } else {
            err = new Error(`Note ${req.params.noteId} not found`);
            err.status = 404;
            return next(err);
        }
    })
    .catch(err => next(err));
})
.post(cors.corsWithOptions, authenticate.verifyUser, authenticate.verifyAdmin, (req, res) => {
    res.statusCode = 403;
    res.end(`POST operation not supported on /resource/${req.params.resourceId}/notes/${req.params.noteId}`);
})
.put(cors.corsWithOptions, authenticate.verifyUser, (req, res, next) => {
    Resource.findById(req.params.resourceId)
    .then(resource => {
        if (resource && resource.notes.id(req.params.noteId)) {
            if(resource.notes.id(req.params.noteId).author._id.equals(req.user._id)) {
                if (req.body.text) {
                    resource.notes.id(req.params.noteId).text = req.body.text;
                }
                resource.save()
                .then(resource => {
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'application/json');
                    res.json(resource);
                })
                .catch(err => next(err));
            } else {
                err = new Error("You are not authorized to perform this operation!");
                err.status = 403;
                return next(err);
            }
        } else if (!resource) {
            err = new Error(`Resource ${req.params.resourceId} not found`);
            err.status = 404;
            return next(err);
        } else {
            err = new Error(`Note ${req.params.noteId} not found`);
            err.status = 404;
            return next(err);
        }
    })
    .catch(err => next(err));
})
.delete(cors.corsWithOptions, authenticate.verifyUser, (req, res, next) => {
    Resource.findById(req.params.resourceId)
    .then(resource => {
        if (resource && resource.notes.id(req.params.noteId)) {
            if(resource.notes.id(req.params.noteId).author._id.equals(req.user._id)) {
                resource.notes.id(req.params.noteId).remove();
                resource.save()
                .then(resource => {
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'application/json');
                    res.json(resource);
                })
                .catch(err => next(err));
            } else {
                err = new Error("You are not authorized to perform this operation!");
                err.status = 403;
                return next(err);
            }  
        } else if (!resource) {
            err = new Error(`Resource ${req.params.resourceId} not found`);
            err.status = 404;
            return next(err);
        } else {
            err = new Error(`Note ${req.params.noteId} not found`);
            err.status = 404;
            return next(err);
        }
    })
    .catch(err => next(err));
});

module.exports = resourceRouter;