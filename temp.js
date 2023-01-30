function convert() {
    if(document.getElementById("drop").value = "Celcius") {
        ConvertCelcius();
      }
    else{
      ConvertFarenheit();
    }
function ConvertCelcius() {
        var x = document.getElementById("temp").value;
        var convertF = x * 2;
        var convertC = x * 3;

        document.getElementById("drop").value = convertF;
        //document.getElementById("kconvert").value = convertF;

    }
