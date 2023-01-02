module.exports = function reverse (n) {
  let a = String(n);
    let b = "";
    let l = a.length;
    for (let i = 0; i < l; i++) {
        b += a[l - 1 - i];
    }
    return parseInt(b);
}
