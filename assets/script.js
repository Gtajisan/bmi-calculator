// Function to update the clock showing Bangladesh Standard Time (BST)
function updateClock() {
    let timeZone = "Asia/Dhaka"; // Bangladesh Time Zone (BST)
    let now = new Date();
    let options = { timeZone: timeZone, hour12: true, hour: "2-digit", minute: "2-digit", second: "2-digit" };
    let timeString = now.toLocaleTimeString("en-US", options);
    document.getElementById("clock").innerText = `Time (BST): ${timeString}`;
}

// Function to calculate BMI
function calculateBMI() {
    // Get input values from the user
    let weight = parseFloat(document.getElementById("weight").value);
    let feet = parseInt(document.getElementById("feet").value);
    let inches = parseInt(document.getElementById("inches").value);

    // Reference to result box
    let resultBox = document.getElementById("result");

    // Check if inputs are valid
    if (isNaN(weight) || isNaN(feet) || isNaN(inches) || weight <= 0 || feet < 0 || inches < 0 || inches > 11) {
        resultBox.style.display = "block"; // Show the result box
        resultBox.style.opacity = "0";  // Reset opacity for fade-in effect
        resultBox.innerHTML = "Please fill in all fields with valid data";
        resultBox.classList.add("error");  // Apply error styling

        // Fade-in animation trigger
        setTimeout(() => {
            resultBox.style.opacity = "1";
        }, 50);

        // Automatically reset on invalid attempt
        setTimeout(resetForm, 1500);
        return;
    }

    // Convert feet and inches to total inches
    let totalInches = (feet * 12) + inches;

    // Convert height from inches to meters (1 inch = 0.0254 meters)
    let heightInMeters = totalInches * 0.0254;

    // Calculate BMI: BMI = weight (kg) / (height (m) ^ 2)
    let bmi = weight / (heightInMeters * heightInMeters);

    // Categorize BMI
    let category = "";
    if (bmi < 18.5) {
        category = "Underweight";
        resultBox.className = "underweight"; // Apply category styling
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

    // Display the result
    resultBox.style.display = "block";  // Show the result box
    resultBox.style.opacity = "0"; // Reset opacity for fade-in effect
    resultBox.innerHTML = `Your BMI: ${bmi.toFixed(2)}<br>Category: ${category}`;

    // Fade-in animation trigger
    setTimeout(() => {
        resultBox.style.opacity = "1";
    }, 50);
}

// Function to reset the form
function resetForm() {
    let resultBox = document.getElementById("result");

    // Hide the result box smoothly
    resultBox.style.opacity = "0";

    setTimeout(() => {
        resultBox.style.display = "none";
        resultBox.className = ""; // Reset any category class
    }, 300);

    // Clear input fields
    document.getElementById("weight").value = "";
    document.getElementById("feet").value = "";
    document.getElementById("inches").value = "";
}

// Function to toggle dark mode
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    let container = document.querySelector(".container");
    container.classList.toggle("dark-mode");
    let buttons = document.querySelectorAll("button");
    buttons.forEach(button => button.classList.toggle("dark-mode"));
}

// Language toggle functionality
let language = "en"; // Default language is English
const translations = {
    en: {
        title: "BMI Calculator",
        weightLabel: "Weight (kg):",
        heightLabel: "Height:",
        calculate: "Calculate BMI",
        reset: "Reset",
        switchTheme: "Switch Theme",
        translate: "বাংলা",
        yourBMI: "Your BMI:",
        category: "Category:",
        underweight: "Underweight",
        normalWeight: "Normal weight",
        overweight: "Overweight",
        obese: "Obese",
        weightError: "Please enter a valid weight in kg.",
        heightError: "Please enter a valid height in feet and inches.",
        invalidHeight: "Height must be greater than zero."
    },
    bn: {
        title: "বিএমআই ক্যালকুলেটর",
        weightLabel: "ওজন (কেজি):",
        heightLabel: "উচ্চতা:",
        calculate: "বিএমআই হিসাব করুন",
        reset: "রিসেট",
        switchTheme: "থিম পরিবর্তন করুন",
        translate: "English",
        yourBMI: "আপনার বিএমআই:",
        category: "বিভাগ:",
        underweight: "অপর্যাপ্ত ওজন",
        normalWeight: "স্বাভাবিক ওজন",
        overweight: "অতিরিক্ত ওজন",
        obese: "স্থূল",
        weightError: "দয়া করে বৈধ ওজন দিন (কেজিতে)।",
        heightError: "দয়া করে বৈধ উচ্চতা দিন (ফুট এবং ইঞ্চি)।",
        invalidHeight: "উচ্চতা অবশ্যই শূন্যের বেশি হতে হবে।"
    }
};

function toggleLanguage() {
    language = language === "en" ? "bn" : "en";
    document.getElementById("translateButton").innerText = translations[language].translate;
    document.getElementById("title").innerText = translations[language].title;
    document.getElementById("weight-label").innerText = translations[language].weightLabel;
    document.getElementById("height-label").innerText = translations[language].heightLabel;
    document.getElementById("calculate-btn").innerText = translations[language].calculate;
    document.getElementById("resetButton").innerText = translations[language].reset;
    document.getElementById("toggleDarkMode").innerText = translations[language].switchTheme;
}

// Initialize the clock to update every second
document.addEventListener("DOMContentLoaded", function () {
    updateClock();
    setInterval(updateClock, 1000); // Update clock every second
});
