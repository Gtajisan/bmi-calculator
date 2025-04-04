// User Greeting
function setUsername() {
    let name = prompt("Hey user, what's your name?");
    document.getElementById("greeting").innerText = `Hey ${name}, how are you?`;
}

// Calculate BMI
function calculateBMI() {
    let weight = parseFloat(document.getElementById("weight").value);
    let feet = parseInt(document.getElementById("feet").value);
    let inches = parseInt(document.getElementById("inches").value);
    let resultBox = document.getElementById("result");

    if (isNaN(weight) || isNaN(feet) || isNaN(inches) || weight <= 0 || feet < 0 || inches < 0 || inches > 11) {
        resultBox.style.display = "block";
        resultBox.innerHTML = "Please fill in all fields with valid data";
        resultBox.style.background = "red";
        resultBox.style.color = "white";
        return;
    }

    // Calculate BMI
    let totalInches = (feet * 12) + inches;
    let heightInMeters = totalInches * 0.0254;
    let bmi = weight / (heightInMeters * heightInMeters);

    // BMI Categories
    let category = "";
    if (bmi < 18.5) {
        category = "Underweight";
        resultBox.className = "underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = "Normal weight";
        resultBox.className = "normal";
    } else if (bmi >= 25 && bmi < 29.9) {
        category = "Overweight";
        resultBox.className = "overweight";
    } else if (bmi >= 30 && bmi < 34.9) {
        category = "Obese Class 1 (Moderate obesity)";
        resultBox.className = "obese1";
    } else if (bmi >= 35 && bmi < 39.9) {
        category = "Obese Class 2 (Severe obesity)";
        resultBox.className = "obese2";
    } else {
        category = "Obese Class 3 (Very severe or morbidly obese)";
        resultBox.className = "obese3";
    }

    // Health Suggestion based on BMI
    let healthSuggestion = "";
    if (bmi < 18.5) {
        healthSuggestion = "You are underweight. Consider consulting a healthcare provider for a balanced diet.";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        healthSuggestion = "You have a healthy weight. Keep maintaining a balanced diet and regular exercise.";
    } else if (bmi >= 25 && bmi < 29.9) {
        healthSuggestion = "You are overweight. A healthy diet and exercise can help you reduce weight.";
    } else {
        healthSuggestion = "You are obese. It is advised to seek medical advice and consider a weight loss plan.";
    }

    resultBox.style.display = "block";
    resultBox.innerHTML = `Your BMI: ${bmi.toFixed(2)}<br>Category: ${category}`;
    document.getElementById("health-suggestion").innerText = healthSuggestion;
}

// Reset Form
function resetForm() {
    let resultBox = document.getElementById("result");
    resultBox.style.display = "none";
    document.getElementById("weight").value = "";
    document.getElementById("feet").value = "";
    document.getElementById("inches").value = "";
}

// Toggle Dark Mode
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

// Clock Function (Bangladesh Time)
function startClock() {
    let clockElement = document.getElementById("clock");
    setInterval(() => {
        let now = new Date();
        let bangladeshTime = new Date(now.toLocaleString("en-US", { timeZone: "Asia/Dhaka" }));
        clockElement.innerText = `Bangladesh Time: ${bangladeshTime.toLocaleTimeString()}`;
    }, 1000);
}

// Change Background Image Randomly Every 5 seconds
function changeBackground() {
    const images = [
        'https://via.placeholder.com/1200x800/ff0000',
        'https://via.placeholder.com/1200x800/00ff00',
        'https://via.placeholder.com/1200x800/0000ff',
        'https://via.placeholder.com/1200x800/ffff00'
    ];
    setInterval(() => {
        let randomIndex = Math.floor(Math.random() * images.length);
        document.body.style.backgroundImage = `url(${images[randomIndex]})`;
    }, 5000);
}

// Translate to Bangla
function translateToBangla() {
    document.getElementById("greeting").innerText = "হ্যালো, আপনি কেমন আছেন?";
    document.getElementById("bmi-category").innerText = "বিএমআই ক্যাটাগরি";
    document.getElementById("health-suggestion").innerText = "স্বাস্থ্য পরামর্শ";
    document.getElementById("ai-message").innerText = "আপনার জন্য AI সহায়ক এখানে।";
}
