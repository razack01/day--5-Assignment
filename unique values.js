// unique values
let a=[1,2,5,1,6]
let b=[]
function  removeduplicates(){


for (let i=0;i<a.length;i++){
	if(b.indexOf(a[i])===-1){
		b.push(a[i])
	}
}
return b
}
console.log(removeduplicates(a))