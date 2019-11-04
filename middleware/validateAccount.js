const validateAccount = (req, res, next) => {
    if (!req.body.name || !req.body.budget) {
        res.status(400).json({ error: 'Please include name and budget for the account' })
    }
    else {
        next();
    }
}

module.exports = validateAccount;