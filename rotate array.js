// rotate an array by k times
function rotate(arr, k) {
for (var i = 0; i < k+1; i++) {
    arr.push(arr.shift());
}
return arr;
}
console.log(rotate([1,2,3,4,5],1))
