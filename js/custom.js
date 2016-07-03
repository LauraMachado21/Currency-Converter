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
  var text = "<option>Select Currency</option>";

  for (var currency in currencyOptions) {
     text+= '<option value="'+currencyOptions[currency]+'">'+currency+'</option>';
 }
  document.write(text);
}
