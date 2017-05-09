function intersection(l1, l2) {
    return l1.filter(function(n) {
        return l2.indexOf(n) !== -1;
    });
};

var l1 = [1, 2, 3];
var l2 = [2, 3, 4];

console.log(intersection(l1, l2));