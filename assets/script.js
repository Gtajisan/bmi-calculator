// script.js
const AI_ADVISOR = {
    underweight: {
        en: "🔍 Nutritional Boost Needed: Increase protein intake with eggs and dairy",
        hi: "🔍 पोषण बढ़ाएँ: अंडे और दूध उत्पादों का सेवन बढ़ाएं",
        bn: "🔍 পুষ্টি বৃদ্ধি করুন: ডিম এবং দুধ পণ্য খান",
        tr: "🔍 Besin Artırın: Yumurta ve süt ürünleri tüketin",
        id: "🔍 Tingkatkan Nutrisi: Konsumsi telur dan produk susu"
    },
    normal: {
        en: "✅ Optimal Health: Maintain current diet with weekly exercise",
        hi: "✅ उत्तम स्वास्थ्य: साप्ताहिक व्यायाम के साथ आहार जारी रखें",
        bn: "✅ সর্বোত্তম স্বাস্থ্য: সাপ্তাহিক ব্যায়াম সঙ্গে খাদ্য বজায় রাখুন",
        tr: "✅ Optimal Sağlık: Haftalık egzersizle diyete devam edin",
        id: "✅ Kesehatan Optimal: Pertahankan diet dengan olahraga mingguan"
    }
};

let currentLang = 'en';

function updateTranslations() {
    document.querySelectorAll('[data-translate]').forEach(el => {
        const key = el.getAttribute('data-translate');
        el.textContent = TRANSLATIONS[currentLang][key];
    });
}

function calculateHealth() {
    const weight = parseFloat(document.getElementById('weight').value);
    const feet = parseInt(document.getElementById('feet').value);
    const inches = parseInt(document.getElementById('inches').value);
    
    // BMI Calculation Logic
    const totalInches = (feet * 12) + inches;
    const heightMeters = totalInches * 0.0254;
    const bmi = weight / (heightMeters ** 2);

    // AI Advice
    let category = bmi < 18.5 ? 'underweight' : 'normal';
    document.getElementById('aiMessage').innerHTML = AI_ADVISOR[category][currentLang];
}

// Time & Location System
function updateLiveClock() {
    const options = {
        timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    };
    document.getElementById('liveClock').textContent = 
        new Date().toLocaleTimeString(navigator.language, options);
}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(pos => {
            document.getElementById('location').textContent = 
                `📍 ${pos.coords.latitude.toFixed(2)}, ${pos.coords.longitude.toFixed(2)}`;
        });
    }
}

// Theme Management
function changeTheme(theme) {
    document.body.className = `${theme}-theme`;
    localStorage.setItem('selectedTheme', theme);
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-theme');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-theme'));
}

// Initialize System
function init() {
    // Language Setup
    currentLang = navigator.language.split('-')[0] || 'en';
    document.getElementById('language').value = currentLang;
    updateTranslations();

    // Time System
    setInterval(updateLiveClock, 1000);
    getLocation();

    // Theme System
    const savedTheme = localStorage.getItem('selectedTheme') || 'coral';
    changeTheme(savedTheme);
}

window.onload = init;
