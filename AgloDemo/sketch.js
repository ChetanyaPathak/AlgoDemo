var arr = [];

while(arr.length < 10){
    var r = Math.floor(Math.random() * 100) + 1;
    if(arr.indexOf(r) === -1) arr.push(r);
}
arr = arr.sort(function (a, b) {  return a - b;  });
document.write("First Array "+ arr)
document.write("<br>");
console.log(arr);

var arr2 = [];
while(arr2.length < 10){
    var r2 = Math.floor(Math.random() * 100) + 1;
    if(arr2.indexOf(r2) === -1) arr2.push(r2);
}
arr2 = arr2.sort(function (a, b) {  return a - b;  });
document.write("Second Array " + arr2);
console.log(arr2);
document.write("<br>");
document.write("\n");
//var median1 = (arr[arr.length/2]+arr[(arr.length/2)-1])/2;

var median1 = evenMedian(arr);
var median2 = evenMedian(arr2)

document.write(" median of array 1 is " + median1 );

document.write(" median of array 2 is " + median2);
document.write("<br>");


function evenMedian(array){
 return (array[array.length/2]+array[(array.length/2)-1])/2;
}

if(median1>median2){
    arr = arr.filter(cmpm1);
    arr2 = arr2.filter(cmpm2);
}
else{
    arr = arr.filter(cmpm3);
    arr2 = arr2.filter(cmpm4);
}
console.log(arr)
console.log(arr2)
function cmpm1(e){
    return e < median1 ;
}
function cmpm2(e){
    return e > median2 ;
}
function cmpm3(e){
    return e > median1 ;
}
function cmpm4(e){
    return e < median2 ;
}



function setup() {
    createCanvas(400, 400);
  }

function draw() {
    for (var j = 0; j < rows; j++) {
        arr[j].show();
      }
}
document.write("After eliminating contents of Array 1 and Array 2 we get ");
document.write("<br>");
document.write("Array 1 becomes "+arr);

document.write("\n");
document.write("<br>");
document.write("Array 2 becomes "+arr2);