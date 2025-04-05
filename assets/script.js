// Multi-language Support
const translations = {
    en: {
        title: "BMI Calculator",
        weight: "Weight:",
        height_feet: "Height (Feet):",
        height_inches: "Height (Inches):",
        calculate: "Calculate BMI",
        theme: "Switch Theme",
        reset: "Reset",
        // ... other translations
    },
    bn: {
        title: "বিএমআই ক্যালকুলেটর",
        weight: "ওজন:",
        height_feet: "উচ্চতা (ফুট):",
        height_inches: "উচ্চতা (ইঞ্চি):",
        calculate: "বিএমআই গণনা করুন",
        theme: "থিম পরিবর্তন",
        reset: "রিসেট"
    },
    hi: {
        title: "बीएमआई कैलकुलेटर",
        weight: "वजन:",
        height_feet: "ऊंचाई (फीट):",
        height_inches: "ऊंचाई (इंच):",
        calculate: "बीएमआई की गणना करें",
        theme: "थीम बदलें",
        reset: "रीसेट"
    },
    tr: {
        title: "BMI Hesaplayıcı",
        weight: "Ağırlık:",
        height_feet: "Boy (Fit):",
        height_inches: "Boy (İnç):",
        calculate: "BMI Hesapla",
        theme: "Temayı Değiştir",
        reset: "Sıfırla"
    }
};

// AI Integration
async function getAIAdvice(bmi, category) {
    try {
        const response = await fetch('/api/ai-advice', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ bmi, category, language: currentLanguage })
        });
        return await response.json();
    } catch (error) {
        return translations[currentLanguage].ai_error;
    }
}

// Enhanced Theme Toggle
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
    document.querySelector('.theme-toggle').style.transform = 'rotate(360deg)';
    setTimeout(() => document.querySelector('.theme-toggle').style.transform = '', 500);
}

// Dynamic Backgrounds
const backgrounds = ['bg1.jpg', 'bg2.jpg', 'bg3.jpg', 'bg4.jpg'];
let currentBg = 0;

function changeBackground() {
    document.querySelector('.background-slideshow').style.backgroundImage = 
        `url(${backgrounds[currentBg]})`;
    currentBg = (currentBg + 1) % backgrounds.length;
}

setInterval(changeBackground, 10000);
