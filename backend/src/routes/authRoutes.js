const router = require('express').Router();
router.get('/test', (req, res) => res.json({ message: 'auth working' }));
module.exports = router;
