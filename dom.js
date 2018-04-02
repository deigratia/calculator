

function CalculatorAdd (){
  let kolom1 = document.getElementById('kolom1');
  let kolom2 = document.getElementById('kolom2');

  let value1 = kolom1.value
  let value2 = kolom2.value

  number1 = Number(value1);
  number2 = Number(value2);
  let result = number1 + number2;
  console.log(result);
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
  return result;
}


// let finalresult = CalculatorAdd(kolom1.value,kolom2.value)
// console.log(finalresult);
