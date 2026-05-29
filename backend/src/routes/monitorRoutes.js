const router = require('express').Router();
router.get('/test', (req, res) => res.json({ message: 'monitor working' }));
module.exports = router;
