const Resource = require('../models/resource');
const mongoose = require('mongoose');

exports.index = (req, res) => {
    res.send('Store Home Page');
};


exports.show = (req, res) => {
    res.send('Show all Books');
};


exports.new = (req, res) => {
    res.send('New Book page');
};


exports.edit = (req, res) => {
    res.send('Edit Page');
};


exports.create = async (req, res) => {
    res.send('Create Page');
};


exports.update = (req, res) => {
    res.send('Update Book Info page');
};


exports.delete = (req, res) => {
    res.send('Delete Book page');
};