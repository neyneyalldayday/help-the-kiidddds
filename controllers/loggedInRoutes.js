const router = require('express').Router();
const { BlogPosts } = require('../models/');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
  try {
    const postData = await BlogPosts.findAll({
      where: {
        user_id: req.session.user_Id,
      },
    });

    const posts = postData.map((post) => post.get({ plain: true }));

    res.render('home', posts);
  } catch (err) {
    res.redirect('login');
  }
});


module.exports = router;