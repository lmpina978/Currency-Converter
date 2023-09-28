const apiKey = 'bf69802c79904002ba1d2b435771995f';

// Function to fetch currency data from the OpenExchangeRates API
async function fetchCurrencies(id) {
    const apiUrl = `https://openexchangerates.org/api/currencies.json?app_id=${apiKey}`;

    const response = await fetch(apiUrl);
    const currencies = await response.json();

    const currencySelect = document.getElementById(id);

    for (const currency in currencies) {
        if (currency != "USD") {
            const option = document.createElement('option');
            option.value = currency;
            option.text = `${currency} - ${currencies[currency]}`;
            currencySelect.appendChild(option);
        }
    }
}

async function currencyCalculations(currencyA, currencyB, amount)
{
    const curUrl = `https://openexchangerates.org/api/latest.json?app_id=${apiKey}`;
    //const apiUrl = `https://openexchangerates.org/api/currencies.json?app_id=${apiKey}`;

    const response = await fetch(curUrl);
    const currencies = await response.json();

    //const curA_name = document.querySelector(currencyA);
    const curA_name = document.getElementById(currencyA);
    //Sconsole.log(curA_name.value);
    var output = curA_name.value;

    //const curB_name = document.querySelector(currencyB);
    const curB_name = document.getElementById(currencyB);
    //console.log(curB_name.id);

    var output2 = curB_name.value;

    var userAmount = document.getElementById(amount).value;
    console.log(userAmount);
    var rateA;
    var rateB;
    for (const currency in currencies.rates) {
        //console.log(currency);
        if (currency == curA_name.value) {
            rateA = currencies.rates[currency];
            //console.log(rateA); 
        }
        
        if (currency == curB_name.value) {
            rateB = currencies.rates[currency];
        }
    }
    console.log(rateA);
    console.log(rateB);
    var result = userAmount * (rateB / rateA);

    console.log(result);

}
