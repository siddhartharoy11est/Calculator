
var num1=[];
var num2=[];
var num, j=0, flag=1, operation="", x=0, y=0;

for(var i=0; i<document.querySelectorAll(".num").length;i++){
  document.querySelectorAll(".num")[i].addEventListener("click", function(){

    num= this.innerHTML;



    if(num>=0 || num<=9){
      if(flag==1){
        num1.push(num);
      }
      else{
        num2.push(num);
      }
    }
    else{
      operation=num;
      flag=0;
      console.log(operation);
    }

      document.querySelector(".screen").innerHTML= num1 + operation + num2;

  })
}

// document.querySelector(".equal").addEventListener("click", function(){
//   num1.reverse();
//   num2.reverse();
//   console.log(num1);
//   console.log(num2);
// for(var i=0; i<num1.length; i++){
//   x+= num1[i]*Math.pow(10, i);
// }
// for(var i=0; i<num2.length; i++){
//   y+= num2[i]*Math.pow(10, i);
// }
// console.log(x);
// console.log(y);
// var result = calc(operation,x, y);
// alert(result);
// })

function myCalc() {

    num2.reverse();
    console.log(num1);
    console.log(num2);
x= firstnum(num1);
  for(var i=0; i<num2.length; i++){
    y+= num2[i]*Math.pow(10, i);
  }
   // document.querySelector(".screen").setAttribute(".screen")=x;
   // document.querySelector(".screen").setAttribute(".screen")=y;
  console.log(x);
  console.log(y);
  var result = calc(operation,x, y);
  num1=[];
  num2=[];
    // num1.length=0;
    // num2.length=0;
    x=0;
    y=0;
    flag=1;
    operation="";
  document.querySelector(".screen").innerHTML= result;

}

document.querySelector(".clear").addEventListener("click", function(){
  num1=[];
  num2=[];
  x=0;
  y=0;
  flag=1;
  operation="";
document.querySelector(".screen").innerHTML= "";

})

function firstnum(num1){
  num1.reverse();
  var x=0;
  for(var i=0; i<num1.length; i++){
    x+= num1[i]*Math.pow(10, i);
  }
  return x;
}

function calc(operation, x, y){
  if(operation === "+"){
    return x+y;
  }
  else if(operation === "-"){
    return x-y;
  }
  else if(operation === "/"){
    return x/y;
  }
  else if(operation === "x"){
    return x*y;
  }
}
