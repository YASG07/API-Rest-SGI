const authenticateUtils = require('./utilitiesMiddleware');

function authenticate(req, res, next) {
    const Token = req.headers.authorization;
    if (!Token){
        return res.status(401).json({error: "Unauthorized"});
    }
    const decodedToken = authenticateUtils.verifyToken(Token);
    if(!decodedToken){
        return res.status(401).json({error: "Unauthorized"});
    }
    res.user = decodedToken;
    next();
}

module.exports = authenticate;