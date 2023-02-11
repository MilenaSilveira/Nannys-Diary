const router = require('express').Router();
const userRoutes = require('./userRoutes');
const commentRoutes = require('./commentRoutes');
const adminRoutes = require('./adminRoutes')
const childRoutes = require('./childRoutes')

router.use('/users', userRoutes);
router.use('/comments', commentRoutes);
router.use('/admin', adminRoutes);
router.use('./child', childRoutes);

module.exports = router;
