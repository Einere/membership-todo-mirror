module.exports = (req, res, next) => {
    console.log('[normalUserAuth.js]', req.isAuthenticated());
    if (!req.isAuthenticated()) {
        res.status(401).end();
    } else {
        return next();
    }
};