// Enhanced Language Support
const translations = {
    en: {
        title: "AI BMI Calculator",
        weight: "Weight (kg):",
        height_feet: "Feet:",
        height_inches: "Inches:",
        calculate: "Analyze BMI",
        theme: "Toggle Theme",
        adviceLabels: {
            underweight: "You're underweight",
            normal: "Healthy weight",
            overweight: "Overweight",
            obese: "Obese"
        }
    },
    bn: {
        title: "এআই বিএমআই ক্যালকুলেটর",
        weight: "ওজন (কেজি):",
        height_feet: "ফুট:",
        height_inches: "ইঞ্চি:",
        calculate: "বিএমআই বিশ্লেষণ করুন",
        theme: "থিম পরিবর্তন করুন",
        adviceLabels: {
            underweight: "আপনি কম ওজনের",
            normal: "সুস্থ ওজন",
            overweight: "অতিরিক্ত ওজন",
            obese: "স্থূলতা"
        }
    }
};

// Enhanced AI Integration
async function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const feet = parseFloat(document.getElementById('feet').value);
    const inches = parseFloat(document.getElementById('inches').value);
    
    const totalInches = (feet * 12) + inches;
    const bmi = (weight / (totalInches * totalInches)) * 703;
    
    const category = getBMICategory(bmi);
    const advice = await getAIAdvice(bmi, category);
    
    showResult(bmi, category, advice);
}

function getBMICategory(bmi) {
    if (bmi < 18.5) return 'underweight';
    if (bmi < 25) return 'normal';
    if (bmi < 30) return 'overweight';
    return 'obese';
}

async function showResult(bmi, category, advice) {
    const resultDiv = document.getElementById('result');
    const labels = translations[currentLanguage].adviceLabels;
    
    resultDiv.innerHTML = `
        <h3>${labels[category]}</h3>
        <p>BMI: ${bmi.toFixed(1)}</p>
        <div class="ai-response">
            <strong>AI Advice:</strong>
            <p>${advice}</p>
        </div>
    `;
    resultDiv.style.display = 'block';
}
