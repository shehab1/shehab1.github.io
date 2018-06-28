function convertNumber(idInput){
  var numberToConvert = document.getElementById('inputNumber').value;

  var rate= 5;

  var convertedNumber=numberToConvert/rate;

  document.getElementById('convertedNumber').innerHTML=convertedNumber;



}
