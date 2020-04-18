const jwt = require('jsonwebtoken');

// to check if token sent by client matches server-stored token
module.exports = (req, res, next) => {
    const token = req.header('x-auth-token');

    if (!token) {
        return res.status(401).json({ noToken: 'No token; user failed to provide authentication.' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // to be able to access user info from id contained in decoded, 
        // and send it to client when they use the app as already authenticated users
        req.user = decoded;

        next();
      } catch (error) {
        return res.status(400).json({ invalidToken: 'Token is not valid' });
      }

} 