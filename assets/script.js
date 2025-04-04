// Translations
const translations = {
    en: {
        title: "BMI Calculator",
        weightLabel: "Weight:",
        heightLabel: "Height:",
        inchesLabel: "Height:",
        calculateBtn: "Calculate BMI",
        themeText: "Dark Theme",
        resetText: "Reset",
        invalidData: "Please fill in all fields with valid data",
        underweight: "Underweight",
        normal: "Normal weight",
        overweight: "Overweight",
        obese1: "Obese Class 1 (Moderate obesity)",
        obese2: "Obese Class 2 (Severe obesity)",
        obese3: "Obese Class 3 (Very severe or morbidly obese)",
        bmiResult: "BMI Result",
        yourBmi: "Your BMI",
        category: "Category",
        healthAdvice: "Health Advice",
        timePrefix: "Bangladesh Time:"
    },
    bn: {
        title: "BMI ক্যালকুলেটর",
        weightLabel: "ওজন:",
        heightLabel: "উচ্চতা:",
        inchesLabel: "উচ্চতা:",
        calculateBtn: "BMI গণনা করুন",
        themeText: "ডার্ক থিম",
        resetText: "রিসেট",
        invalidData: "সমস্ত ফিল্ড সঠিকভাবে পূরণ করুন",
        underweight: "অপর্যাপ্ত ওজন",
        normal: "সাধারণ ওজন",
        overweight: "অতিরিক্ত ওজন",
        obese1: "স্থূলতা শ্রেণী ১ (মাঝারি স্থূলতা)",
        obese2: "স্থূলতা শ্রেণী ২ (তীব্র স্থূলতা)",
        obese3: "স্থূলতা শ্রেণী ৩ (অত্যধিক স্থূলতা)",
        bmiResult: "BMI ফলাফল",
        yourBmi: "আপনার BMI",
        category: "বিভাগ",
        healthAdvice: "স্বাস্থ্য পরামর্শ",
        timePrefix: "সময়:"
    },
    ar: {
        title: "حاسبة مؤشر كتلة الجسم",
        weightLabel: "الوزن:",
        heightLabel: "الطول:",
        inchesLabel: "الطول:",
        calculateBtn: "حساب مؤشر كتلة الجسم",
        themeText: "الوضع المظلم",
        resetText: "إعادة تعيين",
        invalidData: "يرجى ملء جميع الحقول ببيانات صالحة",
        underweight: "نقص الوزن",
        normal: "وزن طبيعي",
        overweight: "زيادة الوزن",
        obese1: "سمنة من الدرجة الأولى (سمنة معتدلة)",
        obese2: "سمنة من الدرجة الثانية (سمنة شديدة)",
        obese3: "سمنة من الدرجة الثالثة (سمنة مفرطة)",
        bmiResult: "نتيجة مؤشر كتلة الجسم",
        yourBmi: "مؤشر كتلة جسمك",
        category: "فئة",
        healthAdvice: "نصائح صحية",
        timePrefix: "وقت بنغلاديش:"
    },
    fa: {
        title: "ماشین حساب BMI",
        weightLabel: "وزن:",
        heightLabel: "قد:",
        inchesLabel: "قد:",
        calculateBtn: "محاسبه BMI",
        themeText: "تم تاریک",
        resetText: "بازنشانی",
        invalidData: "لطفاً تمام فیلدها را با داده‌های معتبر پر کنید",
        underweight: "کمبود وزن",
        normal: "وزن طبیعی",
        overweight: "اضافه وزن",
        obese1: "چاقی کلاس ۱ (چاقی متوسط)",
        obese2: "چاقی کلاس ۲ (چاقی شدید)",
        obese3: "چاقی کلاس ۳ (چاقی بسیار شدید)",
        bmiResult: "نتیجه BMI",
        yourBmi: "BMI شما",
        category: "دسته",
        healthAdvice: "توصیه های سلامتی",
        timePrefix: "زمان بنگلادش:"
    },
    tr: {
        title: "BMI Hesaplayıcı",
        weightLabel: "Ağırlık:",
        heightLabel: "Boy:",
        inchesLabel: "Boy:",
        calculateBtn: "BMI Hesapla",
        themeText: "Karanlık Tema",
        resetText: "Sıfırla",
        invalidData: "Lütfen tüm alanları geçerli verilerle doldurun",
        underweight: "Zayıf",
        normal: "Normal kilolu",
        overweight: "Fazla kilolu",
        obese1: "Obezite Sınıf 1 (Orta derecede obezite)",
        obese2: "Obezite Sınıf 2 (Şiddetli obezite)",
        obese3: "Obezite Sınıf 3 (Çok şiddetli obezite)",
        bmiResult: "BMI Sonucu",
        yourBmi: "BMI'niz",
        category: "Kategori",
        healthAdvice: "Sağlık Tavsiyeleri",
        timePrefix: "Bangladeş Saati:"
    }
};

// AI Health Advisor Recommendations
const healthAdvice = {
    underweight: {
        en: "Your BMI suggests you're underweight. Consider these tips:\n\n• Eat more frequent, nutrient-dense meals\n• Include healthy fats like avocados and nuts\n• Strength training can help build muscle mass\n• Consult a doctor if unintentional weight loss continues",
        bn: "আপনার BMI অনুযায়ী আপনার ওজন কম। এই পরামর্শগুলো বিবেচনা করুন:\n\n• পুষ্টিকর খাবার ঘন ঘন খান\n• অ্যাভোকাডো ও বাদামের মতো স্বাস্থ্যকর চর্বি যোগ করুন\n• শক্তি প্রশিক্ষণ পেশী গঠনে সহায়তা করতে পারে\n• অনিচ্ছাকৃত ওজন হ্রাস অব্যাহত থাকলে ডাক্তারের সাথে পরামর্শ করুন",
        ar: "يشير مؤشر كتلة الجسم إلى أن وزنك أقل من الطبيعي. نصائح لك:\n\n• تناول وجبات مغذية بشكل متكرر\n• أضف الدهون الصحية مثل الأفوكادو والمكسرات\n• تمارين القوة يمكن أن تساعد في بناء العضلات\n• استشر طبيبًا إذا استمر فقدان الوزن غير المقصود",
        fa: "شاخص توده بدن شما نشان می‌دهد که کم‌وزن هستید. این توصیه‌ها را در نظر بگیرید:\n\n• وعده‌های غذایی مغذی و مکرر مصرف کنید\n• چربی‌های سالم مانند آووکادو و آجیل اضافه کنید\n• تمرینات قدرتی می‌تواند به ساخت توده عضلانی کمک کند\n• در صورت ادامه کاهش وزن ناخواسته به پزشک مراجعه کنید",
        tr: "BMI'niz düşük kilolu olduğunuzu gösteriyor. Bu ipuçlarını göz önünde bulundurun:\n\n• Daha sık, besleyici yemekler yiyin\n• Avokado ve fındık gibi sağlıklı yağlar ekleyin\n• Kuvvet antrenmanı kas kütlesi oluşturmaya yardımcı olabilir\n• İstenmeyen kilo kaybı devam ederse doktora danışın"
    },
    normal: {
        en: "Your BMI is in the healthy range. Maintain your health with:\n\n• Balanced diet with variety of foods\n• Regular physical activity (150+ mins/week)\n• Adequate sleep (7-9 hours)\n• Regular health check-ups\n• Stress management techniques",
        bn: "আপনার BMI সুস্থ পরিসরে আছে। স্বাস্থ্য বজায় রাখতে:\n\n• বিভিন্ন ধরণের খাবারের সাথে সুষম খাদ্য\n• নিয়মিত শারীরিক ক্রিয়াকলাপ (সপ্তাহে ১৫০+ মিনিট)\n• পর্যাপ্ত ঘুম (৭-৯ ঘন্টা)\n• নিয়মিত স্বাস্থ্য পরীক্ষা\n• চাপ ব্যবস্থাপনা কৌশল",
        ar: "مؤشر كتلة الجسم الخاص بك في النطاق الصحي. حافظ على صحتك مع:\n\n• نظام غذائي متوازن مع مجموعة متنوعة من الأطعمة\n• نشاط بدني منتظم (150+ دقيقة/أسبوع)\n• نوم كاف (7-9 ساعات)\n• فحوصات صحية منتظمة\n• تقنيات إدارة الإجهاد",
        fa: "শاخص توده بدن شما در محدوده سالم است. با این موارد سلامت خود را حفظ کنید:\n\n• رژیم متعادل با انواع غذاها\n• فعالیت بدنی منظم (۱۵۰+ دقیقه در هفته)\n• خواب کافی (۷-۹ ساعت)\n• معاینات منظم سلامت\n• تکنیک‌های مدیریت استرس",
        tr: "BMI'niz sağlıklı aralıkta. Sağlığınızı korumak için:\n\n• Çeşitli gıdalarla dengeli beslenme\n• Düzenli fiziksel aktivite (haftada 150+ dakika)\n• Yeterli uyku (7-9 saat)\n• Düzenli sağlık kontrolleri\n• Stres yönetimi teknikleri"
    },
    overweight: {
        en: "Your BMI suggests overweight. Consider these steps:\n\n• Reduce portion sizes gradually\n• Increase daily physical activity\n• Limit processed foods and sugary drinks\n• Focus on whole foods and vegetables\n• Consult a nutritionist for personalized plan",
        bn: "আপনার BMI অনুযায়ী আপনার ওজন বেশি। এই পদক্ষেপগুলি বিবেচনা করুন:\n\n• ধীরে ধীরে অংশের আকার হ্রাস করুন\n• দৈনন্দিন শারীরিক ক্রিয়াকলাপ বাড়ান\n• প্রক্রিয়াজাত খাবার এবং মিষ্টি পানীয় সীমিত করুন\n• সম্পূর্ণ খাবার এবং শাকসবজিতে ফোকাস করুন\n• ব্যক্তিগতকৃত পরিকল্পনার জন্য একজন পুষ্টিবিদের সাথে পরামর্শ করুন",
        ar: "يشير مؤشر كتلة الجسم إلى زيادة الوزن. خطوات مقترحة:\n\n• قلل أحجام الحصص تدريجيًا\n• زد النشاط البدني اليومي\n• قلل من الأطعمة المصنعة والمشروبات السكرية\n• ركز على الأطعمة الكاملة والخضروات\n• استشر أخصائي تغذية للحصول على خطة شخصية",
        fa: "شاخص توده بدن شما نشان می‌دهد اضافه وزن دارید. این مراحل را در نظر بگیرید:\n\n• به تدریج اندازه وعده‌ها را کاهش دهید\n• فعالیت بدنی روزانه را افزایش دهید\n• غذاهای فرآوری شده و نوشیدنی‌های شیرین را محدود کنید\n• بر غذاهای کامل و سبزیجات تمرکز کنید\n• برای برنامه شخصی‌سازی شده با متخصص تغذیه مشورت کنید",
        tr: "BMI'niz fazla kilolu olduğunuzu gösteriyor. Bu adımları göz önünde bulundurun:\n\n• Porsiyon boyutlarını kademeli olarak azaltın\n• Günlük fiziksel aktiviteyi artırın\n• İşlenmiş gıdaları ve şekerli içecekleri sınırlayın\n• Tam gıdalara ve sebzelere odaklanın\n• Kişiselleştirilmiş plan için bir beslenme uzmanına danışın"
    },
    obese1: {
        en: "Your BMI indicates Class 1 Obesity. Recommendations:\n\n• Medical supervision recommended\n• Gradual weight loss (1-2 lbs/week)\n• Combination of diet and exercise\n• Behavioral therapy for eating habits\n• Screen for obesity-related conditions",
        bn: "আপনার BMI ক্লাস 1 ওবেসিটি নির্দেশ করে। সুপারিশ:\n\n• চিকিৎসা তত্ত্বাবধান সুপারিশ করা হয়\n• ধীরে ধীরে ওজন হ্রাস (সপ্তাহে ১-২ পাউন্ড)\n• ডায়েট এবং ব্যায়ামের সংমিশ্রণ\n• খাদ্যাভ্যাসের জন্য আচরণগত থেরাপি\n• স্থূলতা সম্পর্কিত অবস্থার জন্য স্ক্রীনিং",
        ar: "مؤشر كتلة الجسم يشير إلى السمنة من الدرجة الأولى. توصيات:\n\n• يوصى بالإشراف الطبي\n• فقدان الوزن التدريجي (1-2 رطل/أسبوع)\n• مزيج من النظام الغذائي والتمارين\n• العلاج السلوكي لعادات الأكل\n• فحص الحالات المرتبطة بالسمنة",
        fa: "شاخص توده بدن شما چاقی کلاس ۱ را نشان می‌دهد. توصیه‌ها:\n\n• نظارت پزشکی توصیه می‌شود\n• کاهش وزن تدریجی (۰.۵-۱ کیلوگرم در هفته)\n• ترکیب رژیم غذایی و ورزش\n• درمان رفتاری برای عادات غذایی\n• غربالگری شرایط مرتبط با چاقی",
        tr: "BMI'niz 1. Sınıf Obeziteyi gösteriyor. Öneriler:\n\n• Tıbbi gözetim önerilir\n• Kademeli kilo kaybı (haftada 0.5-1 kg)\n• Diyet ve egzersiz kombinasyonu\n• Yeme alışkanlıkları için davranış terapisi\n• Obeziteyle ilişkili durumlar için tarama"
    },
    obese2: {
        en: "Your BMI indicates Class 2 Obesity. Important steps:\n\n• Seek medical evaluation immediately\n• Supervised weight loss program\n• Consider bariatric surgery options\n• Address underlying health conditions\n• Psychological support recommended",
        bn: "আপনার BMI ক্লাস 2 ওবেসিটি নির্দেশ করে। গুরুত্বপূর্ণ পদক্ষেপ:\n\n• অবিলম্বে চিকিৎসা মূল্যায়ন নিন\n• তত্ত্বাবধানে ওজন হ্রাস প্রোগ্রাম\n• বেরিয়াট্রিক সার্জারি বিকল্প বিবেচনা করুন\n• অন্তর্নিহিত স্বাস্থ্য অবস্থার সমাধান করুন\n• মানসিক সহায়তা সুপারিশ করা হয়",
        ar: "مؤشر كتلة الجسم يشير إلى السمنة من الدرجة الثانية. خطوات مهمة:\n\n• اطلب التقييم الطبي فورًا\n• برنامج فقدان الوزن تحت الإشراف\n• النظر في خيارات جراحة السمنة\n• معالجة الحالات الصحية الكامنة\n• يوصى بالدعم النفسي",
        fa: "شاخص توده بدن شما چاقی کلاس ۲ را نشان می‌دهد. گام‌های مهم:\n\n• فوراً ارزیابی پزشکی انجام دهید\n• برنامه کاهش وزن تحت نظارت\n• گزینه‌های جراحی چاقی را در نظر بگیرید\n• شرایط سلامت زمینه‌ای را برطرف کنید\n• پشتیبانی روانشناختی توصیه می‌شود",
        tr: "BMI'niz 2. Sınıf Obeziteyi gösteriyor. Önemli adımlar:\n\n• Derhal tıbbi değerlendirme isteyin\n• Denetimli kilo verme programı\n• Bariatrik cerrahi seçeneklerini düşünün\n• Altta yatan sağlık sorunlarını ele alın\n• Psikolojik destek önerilir"
    },
    obese3: {
        en: "Your BMI indicates Class 3 Obesity. Urgent actions needed:\n\n• Immediate medical intervention required\n• Comprehensive obesity management\n• High probability of comorbidities\n• Bariatric surgery likely necessary\n• Long-term multidisciplinary care",
        bn: "আপনার BMI ক্লাস 3 ওবেসিটি নির্দেশ করে। জরুরী পদক্ষেপ প্রয়োজন:\n\n• অবিলম্বে চিকিৎসা হস্তক্ষেপ প্রয়োজন\n• ব্যাপক স্থূলতা ব্যবস্থাপনা\n• সহবাসের উচ্চ সম্ভাবনা\n• বেরিয়াট্রিক সার্জারি সম্ভবত প্রয়োজন\n• দীর্ঘমেয়াদী বহুশাস্ত্রীয় যত্ন",
        ar: "مؤشر كتلة الجسم يشير إلى السمنة من الدرجة الثالثة. إجراءات عاجلة مطلوبة:\n\n• التدخل الطبي الفوري مطلوب\n• إدارة شاملة للسمنة\n• احتمال كبير للأمراض المصاحبة\n• من المحتمل أن تكون جراحة السمنة ضرورية\n• رعاية متعددة التخصصات على المدى الطويل",
        fa: "شاخص توده بدن شما چاقی کلاس ۳ را نشان می‌دهد. اقدامات فوری مورد نیاز:\n\n• مداخله پزشکی فوری لازم است\n• مدیریت جامع چاقی\n• احتمال بالای بیماری‌های همراه\n• احتمالاً جراحی چاقی ضروری است\n• مراقبت چندرشته‌ای بلندمدت",
        tr: "BMI'niz 3. Sınıf Obeziteyi gösteriyor. Acil eylemler gerekli:\n\n• Acil tıbbi müdahale gerekli\n• Kapsamlı obezite yönetimi\n• Eşlik eden hastalıkların yüksek olasılığı\n• Bariatrik cerrahi muhtemelen gerekli\n• Uzun vadeli multidisipliner bakım"
    }
};

// Global variables
let currentLanguage = 'en';
let currentColor = '#007BFF';

// DOM Elements
const weightInput = document.getElementById("weight");
const feetInput = document.getElementById("feet");
const inchesInput = document.getElementById("inches");
const resultBox = document.getElementById("result");
const languageSelect = document.getElementById("language-select");
const colorOptions = document.querySelectorAll('.color-option');
const toggleDarkModeBtn = document.getElementById("toggleDarkMode");
const resetButton = document.getElementById("resetButton");
const calculateBtn = document.getElementById("calculate-btn");

// Initialize the app
function initApp() {
    // Set up event listeners
    languageSelect.addEventListener('change', changeLanguage);
    toggleDarkModeBtn.addEventListener('click', toggleDarkMode);
    resetButton.addEventListener('click', resetForm);
    calculateBtn.addEventListener('click', calculateBMI);
    
    // Color theme selection
    colorOptions.forEach(option => {
        option.addEventListener('click', () => {
            changeColorTheme(option.dataset.color);
            // Update active state
            colorOptions.forEach(opt => opt.classList.remove('active'));
            option.classList.add('active');
        });
    });
    
    // Set default color as active
    document.querySelector('.color-option[data-color="#007BFF"]').classList.add('active');
    
    // Initial updates
    updateTexts();
    updateBangladeshTime();
    setInterval(updateBangladeshTime, 1000);
}

// Change language
function changeLanguage() {
    currentLanguage = languageSelect.value;
    updateTexts();
    updateBangladeshTime();
}

// Update all texts based on current language
function updateTexts() {
    const lang = translations[currentLanguage];
    document.getElementById('title').textContent = lang.title;
    document.getElementById('weight-label').innerHTML = `<b>${lang.weightLabel}</b>`;
    document.getElementById('height-label').innerHTML = `<b>${lang.heightLabel}</b>`;
    document.getElementById('inches-label').innerHTML = `<b>${lang.inchesLabel}</b>`;
    document.getElementById('calculate-btn').textContent = lang.calculateBtn;
    document.getElementById('theme-text').textContent = lang.themeText;
    document.getElementById('reset-text').textContent = lang.resetText;
}

// Calculate BMI
function calculateBMI() {
    // Get input values
    const weight = parseFloat(weightInput.value);
    const feet = parseInt(feetInput.value);
    const inches = parseInt(inchesInput.value);

    // Validate inputs
    if (isNaN(weight) || isNaN(feet) || isNaN(inches) || weight <= 0 || feet < 0 || inches < 0 || inches > 11) {
        showError(translations[currentLanguage].invalidData);
        return;
    }

    // Calculate BMI
    const totalInches = (feet * 12) + inches;
    const heightInMeters = totalInches * 0.0254;
    const bmi = weight / (heightInMeters * heightInMeters);

    // Categorize BMI
    let category, bmiClass;
    
    if (bmi < 18.5) {
        category = translations[currentLanguage].underweight;
        bmiClass = "underweight";
    } else if (bmi < 24.9) {
        category = translations[currentLanguage].normal;
        bmiClass = "normal";
    } else if (bmi < 29.9) {
        category = translations[currentLanguage].overweight;
        bmiClass = "overweight";
    } else if (bmi < 34.9) {
        category = translations[currentLanguage].obese1;
        bmiClass = "obese1";
    } else if (bmi < 39.9) {
        category = translations[currentLanguage].obese2;
        bmiClass = "obese2";
    } else {
        category = translations[currentLanguage].obese3;
        bmiClass = "obese3";
    }

    // Display result with animations
    displayResult(bmi, category, bmiClass);
}

// Show error message
function showError(message) {
    resultBox.style.display = "block";
    resultBox.style.opacity = "0";
    resultBox.innerHTML = message;
    resultBox.className = "error";

    // Fade-in animation
    setTimeout(() => {
        resultBox.style.opacity = "1";
    }, 50);

    // Auto-reset after delay
    setTimeout(resetForm, 3000);
}

// Display BMI result with animations
function displayResult(bmi, category, bmiClass) {
    resultBox.style.display = "block";
    resultBox.style.opacity = "0";
    resultBox.className = bmiClass;

    // Create animated result display
    resultBox.innerHTML = `
        <div class="result-text">
            <div class="animated-title">${translations[currentLanguage].bmiResult}</div>
            <div class="typewriter">${translations[currentLanguage].yourBmi}: ${bmi.toFixed(2)}</div>
            <div class="wave-text" style="color: ${getCategoryColor(bmiClass)}">
                ${createWaveText(`${translations[currentLanguage].category}: ${category}`)}
            </div>
        </div>
    `;

    // Fade-in main result
    setTimeout(() => {
        resultBox.style.opacity = "1";
    }, 50);

    // Show health advice after delay
    setTimeout(() => {
        showHealthAdvice(bmiClass);
    }, 2000);
}

// Show health advice
function showHealthAdvice(bmiClass) {
    const currentAdvice = healthAdvice[bmiClass][currentLanguage] || healthAdvice[bmiClass]['en'];
    
    // Create advice element with animations
    const adviceElement = document.createElement('div');
    adviceElement.className = "health-advice gradient-border";
    adviceElement.innerHTML = `
        <div class="animated-text">${translations[currentLanguage].healthAdvice}</div>
        <div class="advice-content">${formatAdviceText(currentAdvice)}</div>
    `;
    
    // Add to result box with animation
    adviceElement.style.opacity = '0';
    resultBox.appendChild(adviceElement);
    
    // Fade-in animation
    setTimeout(() => {
        adviceElement.style.opacity = '1';
    }, 100);
}

// Format advice text with animations
function formatAdviceText(text) {
    const paragraphs = text.split('\n\n');
    return paragraphs.map((paragraph, i) => {
        const lines = paragraph.split('\n').map(line => line.trim());
        return `<p style="animation-delay: ${i * 0.3}s">${lines.join('<br>')}</p>`;
    }).join('');
}

// Create wave animation text
function createWaveText(text) {
    return text.split('').map((char, i) => 
        char === ' ' ? ' ' : `<span style="--i:${i}">${char}</span>`
    ).join('');
}

// Get color for BMI category
function getCategoryColor(bmiClass) {
    const colors = {
        underweight: '#FFCC00',
        normal: '#4CAF50',
        overweight: '#FF9800',
        obese1: '#F44336',
        obese2: '#D32F2F',
        obese3: '#B71C1C'
    };
    return colors[bmiClass] || currentColor;
}

// Reset form
function resetForm() {
    // Fade out result box
    resultBox.style.opacity = "0";
    
    setTimeout(() => {
        resultBox.style.display = "none";
        resultBox.className = "";
        resultBox.innerHTML = "";
    }, 300);

    // Clear inputs
    weightInput.value = "";
    feetInput.value = "";
    inchesInput.value = "";
}

// Toggle dark mode
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    const themeText = document.getElementById("theme-text");
    themeText.textContent = document.body.classList.contains("dark-mode") 
        ? translations[currentLanguage].themeText.replace("Dark", "Light") 
        : translations[currentLanguage].themeText;
}

// Change color theme
function changeColorTheme(color) {
    currentColor = color;
    document.documentElement.style.setProperty('--primary-color', color);
}

// Update Bangladesh time
function updateBangladeshTime() {
    const options = {
        timeZone: 'Asia/Dhaka',
        hour12: true,
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    
    const formatter = new Intl.DateTimeFormat(currentLanguage === 'en' ? 'en-US' : currentLanguage, options);
    const bangladeshTime = formatter.format(new Date());
    document.getElementById('bangladesh-time').textContent = 
        `${translations[currentLanguage].timePrefix} ${bangladeshTime}
