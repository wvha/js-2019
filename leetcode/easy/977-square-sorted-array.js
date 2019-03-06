var sortedSquares = function(A) {
    let b = A.map(function(num) {
        return num*num;
    })
    return b.sort(function(a, b) {
        return a - b;
    })
};

var sortedSquares = function(A) {
    let b = A.map(a => a*a);
    return b.sort((a, b) => a - b)
}
