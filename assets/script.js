// Function to calculate BMI
function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const feet = parseFloat(document.getElementById('feet').value);
    const inches = parseFloat(document.getElementById('inches').value);

    // Validate input data
    if (isNaN(weight) || isNaN(feet) || isNaN(inches) || weight <= 0 || feet < 0 || inches < 0 || inches > 11) {
        document.getElementById('result').innerHTML = "Please enter valid values!";
        document.getElementById('result').style.display = "block";
        document.getElementById('result').classList.add('error');
        return;
    }

    // Convert height to cm
    const heightInCm = (feet * 30.48) + (inches * 2.54);

    // BMI calculation
    const bmi = weight / Math.pow(heightInCm / 100, 2);

    let resultText = `Your BMI is ${bmi.toFixed(2)}.`;

    // Health suggestions based on BMI
    let suggestion = '';
    if (bmi < 18.5) {
        suggestion = 'You are underweight. Consider eating more nutrient-rich foods.';
    } else if (bmi < 24.9) {
        suggestion = 'You have a normal weight. Keep maintaining a balanced diet!';
    } else if (bmi < 29.9) {
        suggestion = 'You are overweight. Regular exercise and a balanced diet can help.';
    } else if (bmi < 39.9) {
        suggestion = 'You are obese. Consult a healthcare professional for a personalized plan.';
    } else {
        suggestion = 'You have severe obesity. Immediate medical intervention is recommended.';
    }

    document.getElementById('result').innerHTML = resultText + "<br>" + suggestion;
    document.getElementById('result').style.display = "block";
    document.getElementById('result').classList.remove('error');
}

// Function to toggle dark mode
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

// Function to reset form
function resetForm() {
    document.getElementById('weight').value = '';
    document.getElementById('feet').value = '';
    document.getElementById('inches').value = '';
    document.getElementById('result').style.display = 'none';
}

// Function to update the greeting based on user name
function updateGreeting() {
    const userName = document.getElementById('username').value;
    const greetingMessage = userName ? `Hey ${userName}, How are you?` : 'Hey User, How are you?';
    document.getElementById('greeting').innerText = greetingMessage;
}
