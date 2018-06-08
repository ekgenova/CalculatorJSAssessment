// function toString(){
//     document.getElementById("rstring").value = change(number);
//   alert(document.getElementById("rstring").value);
// }

function change(number){
  var number = parseFloat(document.getElementById("result").value);
  var answer="";
  var num = number.toString();
  var final ="";
  if(number>=1000 & number<10000){
    answer+=ones(Math.floor(number/1000)) + " thousand";
    number=number%1000;
  }
  if(number>=100 & number<1000){
    answer+=" " + ones(Math.floor(number/100)) + " hundred";
    number=number%100;
  }
  if(number>=20 & number<100){
    answer+=" " + tens(Math.floor(number/10)*10);
    number-= (Math.floor(number/10)*10);
  }
  if(number<20){
    answer+= " " +ones(number);
    number-=number;
  }

  //
  //
  //INCOMPLETE FUNCTIONALITY
  if(resHasDec && number < 1){
    answer+= " point " + final;
  }
  return answer;
}
function tens(number){
  var tens="";
  switch (number){
    case 20:
    tens = "twenty";
    break;
    case 30:
    tens = "thirty";
    break;
    case 40:
    tens = "forty";
    break;
    case 50:
    tens = "fifty";
    break;
    case 60:
    tens = "sixty";
    break;
    case 70:
    tens = "seventy";
    break;
    case 80:
    tens = "eighty";
    break;
    case 90:
    tens = "ninety";
    break;
  }
  return tens;
}

function ones(number){
  var digit="";
  switch (number){
    case 1:
    digit = "one";
    break;
    case 2:
    digit = "two";
    break;
    case 3:
    digit = "three";
    break;
    case 4:
    digit = "four";
    break;
    case 5:
    digit = "five";
    break;
    case 6:
    digit = "six";
    break;
    case 7:
    digit = "seven";
    break;
    case 8:
    digit = "eight";
    break;
    case 9:
    digit = "nine";
    break;
    case 10:

    digit = "ten";
    break;
    case 11:
    digit = "eleven";
    break;
    case 12:
    digit = "twelve";
    break;
    case 13:
    digit = "thirteen";
    break;
    case 14:
    digit = "fourteen";
    break;
    case 15:
    digit = "fifteen";
    break;
    case 16:
    digit = "sixteen";
    break;
    case 17:
    digit = "seventeen";
    break;
    case 18:
    digit = "eighteen";
    break;
    case 19:
    digit = "nineteen";
    break;
  }
  return digit;
}

//
//
//INCOMPLETE FUNCTIONALITY
function decimal(num){
  for (var i=0; i<num.length(); i++){
    var key = num.substring(i,i+1);
    final += ones(parseInt(key));
  }
  return final;
}
