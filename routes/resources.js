// Our router module
const router = require('express').Router();

// Our controller
const ResourcesController = require('../controllers/resourcesController');




// Your routes

// GET home page.
router.get('/', ResourcesController.index);

// GET show Book list page.
router.get('/show', ResourcesController.show);

// GET new registration page.
router.get('/new', ResourcesController.new);

// GET edit page.
router.get('/:id/edit', ResourcesController.edit);

// GET create page.
router.get('/create', ResourcesController.create);

// GET update page.
router.get('/:id/update', ResourcesController.update);

// GET delete page.
router.get('/:id/delete', ResourcesController.delete);

// We have to export our changes
module.exports = router;