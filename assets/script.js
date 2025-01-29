function calculateBMI() {
    // Get input values from the user
    let weight = parseFloat(document.getElementById("weight").value);
    let feet = parseInt(document.getElementById("feet").value);
    let inches = parseInt(document.getElementById("inches").value);

    // Check if inputs are valid
    if (isNaN(weight) || isNaN(feet) || isNaN(inches) || weight <= 0 || feet < 0 || inches < 0 || inches > 11) {
        document.getElementById("result").style.display = "block";  // Show the result box
        document.getElementById("result").innerHTML = "Please fill in all fields with valid data";
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
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = "Normal weight";
    } else if (bmi >= 25 && bmi < 29.9) {
        category = "Overweight";
    } else if (bmi >= 30 && bmi < 34.9) {
        category = "Obese Class 1 (Moderate obesity)";
    } else if (bmi >= 35 && bmi < 39.9) {
        category = "Obese Class 2 (Severe obesity)";
    } else {
        category = "Obese Class 3 (Very severe or morbidly obese)";
    }

    // Display the result
    document.getElementById("result").style.display = "block";  // Show the result box
    document.getElementById("result").innerHTML = `Your BMI: ${bmi.toFixed(2)}<br>Category: ${category}`;
}

function resetForm() {
    // Hide the result box
    document.getElementById("result").style.display = "none";

    // Clear input fields
    document.getElementById("weight").value = "";
    document.getElementById("feet").value = "";
    document.getElementById("inches").value = "";
}

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}
