var currencyOptions = {
  'AUD ($)':"AUD",
  'BGN (лв)':"BGN",
  'BRL (R$)':"BRL",
  'CAD ($)':"CAD",
  'CHF (CHF)':"CHF",
  'CNY (&yen;)':"CNY",
  'CZK (Kč)':"CZK",
  'DKK (kr)':"DKK",
  'EUR (&euro;)':"EUR",
  'GBP (&pound;)':"GBP",
  'HKD (HK$)':"HKD",
  'HRK (kn)':"HRK",
  'HUF (Ft)':"HUF",
  'IDR (Rp)':"IDR",
  'ILS (&#x20aa;)':"ILS",
  'INR (&#x20B9;)':"INR",
  'JPY (&yen;)':"JPY",
  'KRW (&#x20a9;)':"KRW",
  'MXN ($)':"MXN",
  'MYR (RM)':"MYR",
  'NOK (kr)':"NOK",
  'NZD ($)':"NZD",
  'PHP (&#x20b1;)':"PHP",
  'PLN (zł)':"PLN",
  'RON (lei)':"RON",
  'RUB (руб)':"RUB",
  'SEK (kr)':"SEK",
  'SGD ($)':"SGD",
  'THB (฿)':"THB",
  'TRY (₺)':"TRY",
  'USD ($)':"USD",
  'ZAR (R)':"ZAR"
};

function getCurrencies() {
  var text = "";

  for (var currency in currencyOptions) {
     text+= '<option value="'+currencyOptions[currency]+'">'+currency+'</option>';
 }
  document.write(text);
}

function getConversion(){
  $.getJSON("http://api.fixer.io/latest", conversion)
}


//Conversion Equation = (Currency To)/(Currency From)*(From Amount Provided)
function conversion(data){
  var amountFrom = document.getElementById("amountFromCurrency").value;
  var ToCurrency = document.getElementById("selectToCurrency").value;
  var FromCurrency = document.getElementById("selectFromCurrency").value;
  var textbox = document.getElementById("amountToCurrency");
  var fx = data.rates;
  fx["EUR"]=1;

  if(ToCurrency!=""&&FromCurrency!=""&&amountFrom!=""){
      var rate = fx[ToCurrency]/fx[FromCurrency]*amountFrom;
      textbox.value = rate.toFixed(4)
      putExchangeRate(ToCurrency,FromCurrency,fx);
  }else if(ToCurrency!=""&&FromCurrency!=""){
    putExchangeRate(ToCurrency,FromCurrency,fx);
  }else{
    textbox.value = " "
  }
}

function putExchangeRate(toCurrency, fromCurrency, fx){
  var text = document.getElementById('exchangeRate');
  var exchangeRateString = "1 " + fromCurrency + " equals " + (fx[toCurrency]/fx[fromCurrency]).toFixed(4) + " "+ toCurrency;
  text.value= exchangeRateString
}
