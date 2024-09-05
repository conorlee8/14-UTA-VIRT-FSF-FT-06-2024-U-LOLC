const router = require('express').Router();
const { Post, User } = require('../models');

// GET route for the homepage
router.get('/', async (req, res) => {
  try {
    // Fetch all posts and join with user data
    const postData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });

    // Serialize the data so the template can read it
    const posts = postData.map((post) => post.get({ plain: true }));

    // Pass the posts into the homepage template
    res.render('homepage', {
      posts,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
