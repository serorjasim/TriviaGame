$( document ).ready(function() {
    var amountCorrect = 0;
    var amountIncorrect = 0;
for(var i = 1; i <= 5; i++) {
  var radios = $("group" + i);
  for(var j = 0; j < radios.length; j++) {
    var radio = radios[j];
    if(radio.value === "correct" && radio.checked) {
      amountCorrect++;
    } else if(radio.value === "wrong" && radio.checked) {
      amountIncorrect++;
    }
  }
}
}