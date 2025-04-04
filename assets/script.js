// Multi-Language Support
const translations = {
    en: {
        title: "BMI Calculator",
        bmiCalculator: "BMI Calculator",
        weightLabel: "Weight (kg):",
        heightLabel: "Height:",
        calculateBMI: "Calculate BMI",
        reset: "Reset",
        toggleTheme: "Switch Theme",
        errorMessage: "Invalid input!",
        adviceLabel: "AI Advice:"
    },
    bn: {
        title: "BMI ক্যালকুলেটর",
        bmiCalculator: "BMI নির্ণয় করুন",
        weightLabel: "ওজন (কেজি):",
        heightLabel: "উচ্চতা:",
        calculateBMI: "গণনা করুন",
        reset: "রিসেট",
        toggleTheme: "থিম পরিবর্তন",
        errorMessage: "ভুল ইনপুট!",
        adviceLabel: "এআই পরামর্শ:"
    },
    ar: {
        title: "حاسبة مؤشر كتلة الجسم",
        bmiCalculator: "الآلة الحاسبة لمؤشر كتلة الجسم",
        weightLabel: "الوزن (كجم):",
        heightLabel: "الطول:",
        calculateBMI: "احسب",
        reset: "إعادة",
        toggleTheme: "تبديل السمة",
        errorMessage: "إدخال غير صحيح!",
        adviceLabel: "نصيحة الذكاء الاصطناعي:"
    },
    fa: {
        title: "ماشین حساب BMI",
        bmiCalculator: "محاسبه BMI",
        weightLabel: "وزن (کیلوگرم):",
        heightLabel: "قد:",
        calculateBMI: "محاسبه",
        reset: "بازنشانی",
        toggleTheme: "تغییر تم",
        errorMessage: "ورودی نامعتبر!",
        adviceLabel: "پیشنهاد هوش مصنوعی:"
    },
    tr: {
        title: "BMI Hesaplayıcı",
        bmiCalculator: "BMI Hesapla",
        weightLabel: "Kilo (kg):",
        heightLabel: "Boy:",
        calculateBMI: "Hesapla",
        reset: "Sıfırla",
        toggleTheme: "Temayı Değiştir",
        errorMessage: "Geçersiz giriş!",
        adviceLabel: "AI Tavsiyesi:"
    }
};

// AI Advice
const aiAdvice = {
    Underweight: {
        en: "🍎 Increase calorie intake with nutrient-rich foods",
        bn: "🍎 পুষ্টিকর খাবার খান",
        ar: "🍎 تناول أطعمة غنية بالعناصر الغذائية",
        fa: "🍎 غذاهای مغذی مصرف کنید",
        tr: "🍎 Besleyici gıdalar tüketin"
    },
    Normal: {
        en: "🎉 Maintain balanced diet and exercise",
        bn: "🎉 সুষম খাদ্য ও ব্যায়াম বজায় রাখুন",
        ar: "🎉 حافظ على نظام غذائي متوازن",
        fa: "🎉 رژیم متعادل و ورزش را حفظ کنید",
        tr: "🎉 Dengeli beslenmeye devam edin"
    },
    Overweight: {
        en: "⚠️ Limit sugary foods, exercise regularly",
        bn: "⚠️ মিষ্টি কম খান, নিয়মিত ব্যায়াম করুন",
        ar: "⚠️ قلل من السكريات وتمرن بانتظام",
        fa: "⚠️ مصرف شیرینی را کاهش دهید",
        tr: "⚠️ Şekerli gıdaları sınırlayın"
    }
};

// Time Zone Detection
function updateLocalTime() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            const options = {
                timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
                hour: 'numeric',
                minute: '2-digit',
                second: '2-digit',
                hour12: true,
                weekday: 'long',
                month: 'long',
                day: 'numeric'
            };
            const formatter = new Intl.DateTimeFormat(navigator.language, options);
            document.getElementById('localTime').textContent = 
                `Local Time: ${formatter.format(new Date())}`;
        });
    }
}
setInterval(updateLocalTime, 1000);

// Theme Management
function changeTheme(theme) {
    document.body.className = theme;
    localStorage.setItem('theme', theme);
}

// Language Management
let currentLang = 'en';
function changeLanguage(lang) {
    currentLang = lang;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        el.textContent = translations[lang][key];
    });
    localStorage.setItem('language', lang);
}

// Dark Mode with Particles
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    if(document.body.classList.contains('dark-mode')) {
        const particles = document.createElement('div');
        particles.className = 'particles';
        document.body.appendChild(particles);
        setTimeout(() => particles.remove(), 5000);
    }
}

// BMI Calculation
function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const feet = parseInt(document.getElementById('feet').value);
    const inches = parseInt(document.getElementById('inches').value);
    const resultBox = document.getElementById('result');

    // Validation
    if (isNaN(weight) || isNaN(feet) || isNaN(inches)) {
        resultBox.style.display = 'block';
        resultBox.innerHTML = translations[currentLang].errorMessage;
        resultBox.className = 'error';
        return;
    }

    // Calculation
    const totalInches = (feet * 12) + inches;
    const heightMeters = totalInches * 0.0254;
    const bmi = weight / (heightMeters ** 2);

    // Result Display
    let category = '';
    if (bmi < 18.5) category = 'Underweight';
    else if (bmi < 24.9) category = 'Normal';
    else category = 'Overweight';

    resultBox.innerHTML = `
        <div class="glow-text">${bmi.toFixed(1)}</div>
        <div>${category}</div>
        <div class="advice">${aiAdvice[category][currentLang]}</div>
    `;
    resultBox.style.display = 'block';
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    changeTheme(localStorage.getItem('theme') || 'default-theme');
    changeLanguage(localStorage.getItem('language') || 'en');
    updateLocalTime();
});
