function calculation(){
    var currency1 = document.getElementById("currency1Box").value;;
    var currency2 = document.getElementById("currency2Box").value;;
    var currency3 = document.getElementById("currency3Box").value;
    var currency4 = (currency3*currency1)/currency2;
    
    
    return currency4 + document.getElementById("currencyType1Box").value;
}

function showResult(event){
    event.preventDefault();
    var result = document.getElementById("result");
    result.innerHTML = calculation();
}


function showCurrencySymbol(event){
    event.preventDefault();
    var currencySymbol1 = document.getElementById("currency1Symbol");
    var currencySymbol2 = document.getElementById("currency2Symbol");
    var currencySymbol3 = document.getElementById("currency3Symbol");
    
    currencySymbol1.innerHTML = document.getElementById("currencyType1Box").value;
    currencySymbol2.innerHTML = document.getElementById("currencyType2Box").value;
    currencySymbol3.innerHTML = document.getElementById("currencyType2Box").value;
}

var convertButton = document.getElementById("convertButton");
convertButton.onclick = showResult;

var currency1Symbol = document.getElementById("currencyType1Box");
currency1Symbol.onchange = showCurrencySymbol;

var currency2Symbol = document.getElementById("currencyType2Box");
currency2Symbol.onchange = showCurrencySymbol;


