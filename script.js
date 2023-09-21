// Function to fetch currency data from the OpenExchangeRates API
function fetchCurrencies(id) {
    // Replace 'YOUR_API_KEY' with your actual API key
    const apiKey = 'bf69802c79904002ba1d2b435771995f';
    const apiUrl = `https://openexchangerates.org/api/currencies.json?app_id=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Get the select element
            const currencySelect = document.getElementById(id);

            // Loop through the currency data and add options to the select element
            for (const currencyCode in data) {
                if (currencyCode != "USD") {
                    const option = document.createElement('option');
                    option.value = currencyCode;
                    option.text = `${currencyCode} - ${data[currencyCode]}`;
                    currencySelect.appendChild(option);
                }
            }
        })
        .catch(error => console.error('Error fetching currency data:', error));
}