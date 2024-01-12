    document.querySelector('#button').addEventListener('click', function () {
        const result = document.querySelector('#results');
        const height = parseFloat(document.querySelector('#height').value);
        const weight = parseFloat(document.querySelector('#weight').value);

        if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
            result.innerHTML = `Please enter valid height and weight.`;
        } else {
            const bmi = (weight / ((height / 100) ** 2)).toFixed(2);
            result.textContent = `Your BMI is ${bmi}.`;

            // Additional logic to categorize BMI
            if (bmi < 18.6) {
                result.innerHTML += '<br>Underweight';
            } else if (bmi >= 18.6 && bmi <= 24.9) {
                result.innerHTML += '<br>Normal Range';
            } else {
                result.innerHTML += '<br>Overweight';
            }
        }
    });