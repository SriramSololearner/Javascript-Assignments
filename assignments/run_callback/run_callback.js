function RunCallback(a, b, cb) {
    // Write you code here, you need to add a and b, pass the result into callback function cb as argument return the result
    let sum = a+b;
    return cb(sum);

}
// RunCallback(3,4,cb);

module.exports = RunCallback;
