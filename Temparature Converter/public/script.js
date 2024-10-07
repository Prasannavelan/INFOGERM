function convertTemperature() {
    const temperature = parseFloat(document.getElementById('temperature').value);
    const inputScale = document.getElementById('input-scale').value;
    const outputScale = document.getElementById('output-scale').value;
    let result;

    if (isNaN(temperature)) {
        alert('Please enter a valid temperature value.');
        return;
    }

    if (inputScale === outputScale) {
        result = temperature;
    } else if (inputScale === 'Celsius') {
        if (outputScale === 'Fahrenheit') {
            result = (temperature * 9/5) + 32;
        } else if (outputScale === 'Kelvin') {
            result = temperature + 273.15;
        }
    } else if (inputScale === 'Fahrenheit') {
        if (outputScale === 'Celsius') {
            result = (temperature - 32) * 5/9;
        } else if (outputScale === 'Kelvin') {
            result = (temperature - 32) * 5/9 + 273.15;
        }
    } else if (inputScale === 'Kelvin') {
        if (outputScale === 'Celsius') {
            result = temperature - 273.15;
        } else if (outputScale === 'Fahrenheit') {
            result = (temperature - 273.15) * 9/5 + 32;
        }
    }

    document.getElementById('result').textContent = `Converted Temperature: ${result.toFixed(2)} ${outputScale}`;
}

function resetFields() {
    document.getElementById('temperature').value = '';
    document.getElementById('result').textContent = '';
}
