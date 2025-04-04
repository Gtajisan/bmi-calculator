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

// AI Advice (Multi-Language)
const aiAdvice = {
    Underweight: {
        en: "🍎 Eat more protein-rich foods. Consult a nutritionist.",
        bn: "🍎 প্রোটিন সমৃদ্ধ খাবার খান। পুষ্টিবিদের সাথে পরামর্শ করুন।",
        ar: "🍎 تناول أطعمة غنية بالبروتين. استشر أخصائي تغذية.",
        fa: "🍎 غذاهای غنی از پروتئین بخورید. با متخصص تغذیه مشورت کنید.",
        tr: "🍎 Protein açısından zengin gıdalar tüketin. Bir diyetisyene danışın."
    },
    Normal: {
        en: "🎉 Maintain a balanced diet and exercise!",
        bn: "🎉 সুষম খাদ্য এবং ব্যায়াম বজায় রাখুন!",
        ar: "🎉 حافظ على نظام غذائي متوازن وتمارين!",
        fa: "🎉 یک رژیم غذایی متعادل و ورزش منظم داشته باشید!",
        tr: "🎉 Dengeli beslenmeye ve egzersize devam edin!"
    },
    Overweight: {
        en: "⚠️ Limit sugary drinks. Try brisk walking 30 mins/day.",
        bn: "⚠️ মিষ্টি কম খান। প্রতিদিন ৩০ মিনিট হাঁটুন।",
        ar: "⚠️ قلل من المشروبات السكرية. حاول المشي السريع 30 دقيقة/يوم.",
        fa: "⚠️ مصرف نوشیدنی های شیرین را محدود کنید. روزانه 30 دقیقه پیاده روی تند انجام دهید.",
        tr: "⚠️ Şekerli içecekleri sınırlayın. Günde 30 dakika tempolu yürüyüş yapın."
    },
    Obese1: {
        en: "🚨 Consult a doctor for a personalized plan.",
        bn: "🚨 ব্যক্তিগতকৃত পরিকল্পনার জন্য ডাক্তারের সাথে পরামর্শ করুন।",
        ar: "🚨 استشر طبيبًا للحصول على خطة مخصصة.",
        fa: "🚨 برای برنامه شخصی سازی شده با پزشک مشورت کنید.",
        tr: "🚨 Kişiselleştirilmiş bir plan için doktora danışın."
    }
};

// Bangladesh Time Zone
function updateBangladeshTime() {
    const options = {
        timeZone: 'Asia/Dhaka',
        hour: 'numeric',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    };
    const timeString = new Date().toLocaleTimeString('en-BD', options);
    document.getElementById('bangladeshTime').textContent = `বাংলাদেশের সময়: ${timeString}`;
}
setInterval(updateBangladeshTime, 1000);

// Theme Management
function changeTheme(theme) {
    document.body.className = theme;
    localStorage.setItem('theme', theme);
}

// Language Management
function changeLanguage(lang) {
    currentLang = lang;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        el.textContent = translations[lang][key];
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        el.placeholder = translations[lang][key];
    });
    localStorage.setItem('language', lang);
}

// BMI Calculation
function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const feet = parseInt(document.getElementById('feet').value);
    const inches = parseInt(document.getElementById('inches').value);
    const resultBox = document.getElementById('result');

    // Validation
    if (isNaN(weight) || isNaN(feet) || isNaN(inches) || weight <= 0 || feet < 0 || inches < 0 || inches > 11) {
        resultBox.style.display = 'block';
        resultBox.style.opacity = '0';
        resultBox.innerHTML = translations[currentLang].errorMessage;
        resultBox.className = 'error';
        setTimeout(() => resultBox.style.opacity = '1', 50);
        setTimeout(resetForm, 1500);
        return;
    }

    // Calculate BMI
    const totalInches = feet * 12 + inches;
    const heightInMeters = totalInches * 0.0254;
    const bmi = weight / (heightInMeters ** 2);

    // Determine Category
    let category = '';
    if (bmi < 18.5) {
        category = 'Underweight';
        resultBox.className = 'underweight';
    } else if (bmi < 24.9) {
        category = 'Normal';
        resultBox.className = 'normal';
    } else if (bmi < 29.9) {
        category = 'Overweight';
        resultBox.className = 'overweight';
    } else if (bmi < 34.9) {
        category = 'Obese1';
        resultBox.className = 'obese1';
    } else {
        category = 'Obese2';
        resultBox.className = 'obese2';
    }

    // Display Result with AI Advice
    resultBox.style.display = 'block';
    resultBox.style.opacity = '0';
    resultBox.innerHTML = `
        <div class="glow-text">${bmi.toFixed(2)}</div>
        <div>${category}</div>
        <div class="ai-advice">${aiAdvice[category][currentLang]}</div>
    `;
    setTimeout(() => resultBox.style.opacity = '1', 50);
}

// Reset Form
function resetForm() {
    document.getElementById('weight').value = '';
    document.getElementById('feet').value = '';
    document.getElementById('inches').value = '';
    const resultBox = document.getElementById('result');
    resultBox.style.opacity = '0';
    setTimeout(() => {
        resultBox.style.display = 'none';
        resultBox.className = '';
    }, 300);
}

// Dark Mode Toggle
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

// Initialize
let currentLang = localStorage.getItem('language') || 'en';
document.addEventListener('DOMContentLoaded', () => {
    changeTheme(localStorage.getItem('theme') || 'default-theme');
    changeLanguage(currentLang);
});
