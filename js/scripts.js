// Business Logic


// User Interface
$(document).ready(function(){
  $("form#numeralForm").submit(function(event){
  event.preventDefault();
  const number = parseInt($("input#numInput").val());
  $("#userResult").text(number);

  if(number < 1 || number > 3999)
  alert("Please enter a number between 1 and 3,999");
  
  function isNumber(number){
    if (isNaN(number)){
      alert("Please enter a number between 1 and 3,999");
    }
  }
  isNumber(number);
  });
});

const romanNum = ["I", "V", "X", "L", "C", "D", "M"]
const arabic = [1, 5, 10, 50, 100, 500, 1000]
let transform = "";

const convert = arabic.forEach(function(romanNum){
  for (let index = 0; index < romanNum.length; index++){
    transform.push(romanNum(index));
  }
  convert(tranform);
})

/*
const I = 1
const V = 5
const X = 10
const L = 50
const C = 100
const D = 500
const M = 1000
*/