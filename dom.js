

function CalculatorAdd (){
  let kolom1 = document.getElementById('kolom1');
  let kolom2 = document.getElementById('kolom2');

  let value1 = kolom1.value
  let value2 = kolom2.value

  number1 = Number(value1);
  number2 = Number(value2);
  let result = number1 + number2;
  console.log(result);
  document.getElementById('addoutput').innerHTML = result;
  return result;
}


function Calculatormultiply (){
  let kolom1 = document.getElementById('kolom3');
  let kolom2 = document.getElementById('kolom4');

  let value1 = kolom3.value
  let value2 = kolom4.value

  number1 = Number(value1);
  number2 = Number(value2);
  let result = number1 * number2;
  console.log(result);
  document.getElementById('mutoutput').innerHTML = result;
  return result;
}


function Calculatordivide (){
  let kolom5 = document.getElementById('kolom5');
  let kolom6 = document.getElementById('kolom6');

  let value1 = kolom5.value
  let value2 = kolom6.value

  number1 = Number(value1);
  number2 = Number(value2);
  let result = number1 / number2;
  console.log(result);
  document.getElementById('divoutput').innerHTML = result;
  return result;
}


function Calculatorsubstrack(){
  let kolom7 = document.getElementById('kolom7');
  let kolom8 = document.getElementById('kolom8');

  let value1 = kolom7.value
  let value2 = kolom8.value

  number1 = Number(value1);
  number2 = Number(value2);
  let result = number1 - number2;
  console.log(result);
  document.getElementById('suboutput').innerHTML = result;
  return result;
}

// let finalresult = CalculatorAdd(kolom1.value,kolom2.value)
// console.log(finalresult);
