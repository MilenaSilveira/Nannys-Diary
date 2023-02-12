const router = require('express').Router();
const adminRoutes = require('./adminRoutes');
const childRoutes = require('./childRoutes');
const commentRoutes = require('./adminRoutes');
const userRoutes = require('./childRoutes');

router.use('/user', userRoutes);
router.use('/comment', commentRoutes);
router.use('/admin', adminRoutes);
router.use('/child', childRoutes);

module.exports = router;
