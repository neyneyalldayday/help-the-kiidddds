const router = require('express').Router();
const blogRoutes = require('./blogRoutes');
const apiRoutes = require('./api');
const loggedInRoutes = require("./loggedInRoutes")


router.use('/api', apiRoutes);
router.use('/', blogRoutes); // express is inferring this is the base route/root path
router.use('/loggedIn', loggedInRoutes)


module.exports = router;
