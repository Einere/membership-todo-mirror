module.exports = (req, res, next) => {
    console.log('[adminAuth.js]', req.isAuthenticated());
    if (!req.isAuthenticated()) {
        res.status(401).end();
    } else if (req.user.privilege > 1) {
        res.status(403).end();
    } else {
        return next();
    }
};