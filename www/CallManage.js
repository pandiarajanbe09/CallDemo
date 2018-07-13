var exec = require('cordova/exec');

/*exports.coolMethod = function (arg0, success, error) {
    exec(success, error, 'CallManage', 'coolMethod', [arg0]);
};*/
modules.exports.coolMethod = function (arg0, success, error) {
    exec(success, error, 'CallManage', 'coolMethod', [arg0]);
};
modules.exports.coolMethod1 = function (arg0, success, error) {
    exec(success, error, 'CallManage', 'coolMethod1', [arg0]);
};