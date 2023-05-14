// Routes for Get blog info
const router = require('express').Router();
const { BlogPosts, User } = require('../models');

router.get('/', async (req, res) => {
    const postData = await BlogPosts.findAll({
        include: {
            model: User
        }
    }).catch((err) => {
        res.json(err);
    });
    const allPosts = postData.map((posts) => posts.get({ plain: true }));
    console.log(allPosts);
    res.render('all', { allPosts:allPosts });
});

// what's session are they logged in already
router.get('/login', (req, res) => {
    if (req.session.logged_in) {
      res.redirect('/');
      return
    }
    res.render('login');
  });

module.exports = router;
