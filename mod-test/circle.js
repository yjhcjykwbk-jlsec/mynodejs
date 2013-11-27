var PI = Math.PI;
module.exports.area = function (r) {
    return PI * r * r;
};
module.exports.circumference = function (r) {
    return 2 * PI * r;
};
yy="i am global scope";
console.log(exports);
