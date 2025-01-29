function calculateBMI() {
    let weight = parseFloat(document.getElementById("weight").value);
    let height1 = parseFloat(document.getElementById("height1").value);
    let height2 = parseFloat(document.getElementById("height2").value) || 0;
    let unit = document.querySelector('input[name="unit"]:checked').value;

    if (isNaN(weight) || isNaN(height1) || height1 <= 0) {
        document.getElementById("result").innerHTML = "Please enter valid values.";
        return;
    }

    let bmi;
    if (unit === "metric") {
        height1 /= 100; // Convert cm to meters
        bmi = weight / (height1 * height1);
    } else {
        let heightInInches = (height1 * 12) + height2;
        bmi = (weight / (heightInInches * heightInInches)) * 703;
    }

    let category = getBMICategory(bmi);
    document.getElementById("result").innerHTML = `Your BMI: ${bmi.toFixed(2)} (${category})`;
}

function getBMICategory(bmi) {
    if (bmi < 18.5) return "Underweight";
    if (bmi < 24.9) return "Normal weight";
    if (bmi < 29.9) return "Overweight";
    return "Obese";
}

// Toggle between Metric and Imperial
document.querySelectorAll('input[name="unit"]').forEach(radio => {
    radio.addEventListener("change", function() {
        let isMetric = this.value === "metric";
        document.getElementById("weightUnit").innerText = isMetric ? "kg" : "lbs";
        document.getElementById("heightUnit").innerText = isMetric ? "cm" : "feet";
        document.getElementById("height2").style.display = isMetric ? "none" : "inline";
    });
});

// Dark Mode Toggle
document.getElementById("toggleDarkMode").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});
