document.getElementById('calculate-btn').addEventListener('click', function() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; // convert cm to meters

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        alert('Please enter valid weight and height values.');
        return;
    }

    const bmi = (weight / (height * height)).toFixed(2);
    let category = '';

    if (bmi < 18.5) {
        category = 'Underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = 'Normal weight';
    } else if (bmi >= 25 && bmi < 29.9) {
        category = 'Overweight';
    } else {
        category = 'Obesity';
    }

    document.getElementById('bmi-value').textContent = bmi;
    document.getElementById('bmi-category').textContent = `Category: ${category}`;
});

document.getElementById('reset-btn').addEventListener('click', function() {
    document.getElementById('weight').value = '';
    document.getElementById('height').value = '';
    document.getElementById('bmi-value').textContent = '';
    document.getElementById('bmi-category').textContent = '';
});
