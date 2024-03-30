const express = require('express');
const router = express.Router();
const { auth } = require('../utils');
const { themeController, postController } = require('../controllers');

// middleware that is specific to this router

router.get('/', themeController.getThemes);
router.get('/home', themeController.getLastFour);

router.post('/', auth(), themeController.createTheme);

router.post('/search', themeController.search);

router.get('/:themeId', themeController.getTheme);
router.post('/:themeId/comment', auth(), postController.createPost);
router.delete('/:themeId', auth(), themeController.deleteTheme);
router.put('/:themeId/like', auth(), themeController.subscribe);
router.put('/:themeId/edit', auth(), themeController.editTheme);
router.put('/:themeId/posts/:postId', auth(), postController.editPost);
router.delete('/:themeId/posts/:postId', auth(), postController.deletePost);

// router.get('/my-trips/:id/reservations', auth(), themeController.getReservations);

module.exports = router;