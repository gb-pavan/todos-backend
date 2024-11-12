const authService = require('../services/authService');

exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await authService.register(name, email, password);
    res.status(201).json({ message: "User registered successfully, please sign in." });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const { user, token } = await authService.login(email, password);
    res.json({ user: user, token: token });
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};
