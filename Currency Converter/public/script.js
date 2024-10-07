const apiKey = '4d52f041a032507bc7c8b0d5';
const apiUrl = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;

document.addEventListener('DOMContentLoaded', () => {
    const amountInput = document.getElementById('amount');
    const fromCurrency = document.getElementById('from-currency');
    const toCurrency = document.getElementById('to-currency');
    const resultDisplay = document.getElementById('result');
    const convertButton = document.getElementById('convert-button');
    const refreshButton = document.getElementById('refresh-button');

    let exchangeRates = {};

    // Fetch currency rates and populate dropdowns
    const fetchRates = async () => {
        try {
            const response = await fetch(apiUrl);
            const data = await response.json();
            exchangeRates = data.conversion_rates; // Store the rates locally
            const currencies = Object.keys(exchangeRates);
            populateCurrencyOptions(currencies);
        } catch (error) {
            console.error('Error fetching exchange rates:', error);
        }
    };

    // Populate currency dropdowns
    const populateCurrencyOptions = (currencies) => {
        fromCurrency.innerHTML = currencies.map(currency => `<option value="${currency}">${currency}</option>`).join('');
        toCurrency.innerHTML = currencies.map(currency => `<option value="${currency}">${currency}</option>`).join('');
    };

    // Convert currency
    const convertCurrency = () => {
        const amount = parseFloat(amountInput.value);
        const from = fromCurrency.value;
        const to = toCurrency.value;

        if (isNaN(amount)) {
            resultDisplay.textContent = 'Please enter a valid amount';
            return;
        }

        // Calculate the conversion
        const convertedAmount = (amount / exchangeRates[from]) * exchangeRates[to];
        resultDisplay.textContent = convertedAmount.toFixed(2);
    };

    // Refresh exchange rates
    refreshButton.addEventListener('click', async () => {
        await fetchRates();
        resultDisplay.textContent = 'Rates updated successfully!';
    });
    
    // Event listener for conversion
    convertButton.addEventListener('click', convertCurrency);

    // Initial fetch
    fetchRates();
});
