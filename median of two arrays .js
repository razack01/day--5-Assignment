var arr1=[1,5,7,8]
var arr2=[2,4,6]
function medianoftwosorted(arr1,arr2){
let b= [...arr1,...arr2]
console.log(b.sort())

var length=b.length; 
if(length%2==1){
	console.log(b[(length/2)-.5])
	return b[(length/2)-.5]
}
else{
	console.log(b[length/2]+b[(length/2)-1])/2
	return (b[length/2]+b[(length/2)-1])/2
}




}


medianoftwosorted(arr1,arr2)

