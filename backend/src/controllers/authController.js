const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Generate JWT — expires in 7 days
const generateToken = (id) =>
  jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '7d' });

// POST /api/auth/register
exports.register = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    const exists = await User.findOne({ email });
    if (exists) return res.status(400).json({ message: 'Email already registered' });

    const user = await User.create({ username, email, password });
    res.status(201).json({ token: generateToken(user._id), user: { id: user._id, username, email, role: user.role } });
  } catch (err) { next(err); }
};

// POST /api/auth/login
exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || !(await user.matchPassword(password)))
      return res.status(401).json({ message: 'Invalid credentials' });

    res.json({ token: generateToken(user._id), user: { id: user._id, username: user.username, email, role: user.role } });
  } catch (err) { next(err); }
};

// GET /api/auth/me  (requires auth middleware)
exports.getMe = async (req, res) => {
  res.json({ user: req.user });
};