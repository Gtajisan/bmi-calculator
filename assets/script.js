function calculateBMI() {
    let weight = parseFloat(document.getElementById("weight").value);
    let feet = parseInt(document.getElementById("feet").value);
    let inches = parseInt(document.getElementById("inches").value);

    if (isNaN(weight) || isNaN(feet) || isNaN(inches)) {
        document.getElementById("result").innerHTML = "Please fill in all fields with valid data.";
        return;
    }

    // Convert feet and inches to total inches
    let totalInches = (feet * 12) + inches;

    // Convert height from inches to meters (1 inch = 0.0254 meters)
    let heightInMeters = totalInches * 0.0254;

    // Calculate BMI
    let bmi = weight / (heightInMeters * heightInMeters);

    // Categorize BMI
    let category = "";
    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = "Normal weight";
    } else if (bmi >= 25 && bmi < 29.9) {
        category = "Overweight";
    } else {
        category = "Obese";
    }

    // Display the result
    document.getElementById("result").innerHTML = `Your BMI: ${bmi.toFixed(2)}<br>Category: ${category}`;
}
