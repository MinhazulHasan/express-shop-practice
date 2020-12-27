module.exports.first = function(req, res, next) {
    console.log('1st Middlewere');
    next();
}

module.exports.second = function(req, res, next) {
    console.log('2nd Middlewere');
    next();
}

module.exports.third = function(req, res, next) {
    console.log('3rd Middlewere');
    return res.send('DONE!');
}