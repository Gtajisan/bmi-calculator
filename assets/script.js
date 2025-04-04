// System Configuration
const config = {
    debugMode: true,
    defaultTheme: 'light',
    defaultColor: '#007BFF',
    maxHistoryEntries: 10
};

// State Management
let appState = {
    currentLanguage: 'en',
    currentTheme: config.defaultTheme,
    currentColor: config.defaultColor,
    userData: [],
    calculationHistory: []
};

// DOM Elements
const elements = {
    weightInput: document.getElementById('weight'),
    feetInput: document.getElementById('feet'),
    inchesInput: document.getElementById('inches'),
    resultDisplay: document.getElementById('result-display'),
    languageSelect: document.getElementById('language-select'),
    themeToggle: document.getElementById('theme-toggle'),
    colorOptions: document.querySelectorAll('.color-option'),
    calculateBtn: document.getElementById('calculate-btn'),
    resetBtn: document.getElementById('reset-btn'),
    bmiValue: document.getElementById('bmi-value'),
    categoryDisplay: document.getElementById('category-display'),
    healthAdvice: document.getElementById('health-advice')
};

// Translations Database
const translations = {
    en: {
        title: "BMI Calculator",
        weightLabel: "Weight (kg)",
        heightLabel: "Height",
        calculate: "Calculate BMI",
        reset: "Reset",
        // ... (all previous translations)
    },
    // ... (other languages)
};

// Health Advice Database
const healthAdvice = {
    underweight: {
        en: "Your BMI suggests you're underweight...",
        bn: "আপনার BMI অনুযায়ী আপনার ওজন কম...",
        // ... (other languages)
    },
    // ... (other categories)
};

// Core Functions
function initializeApp() {
    loadPersistedState();
    setupEventListeners();
    updateUI();
    setInterval(updateBangladeshTime, 1000);
    if(config.debugMode) console.log("Application initialized");
}

function setupEventListeners() {
    elements.calculateBtn.addEventListener('click', handleCalculation);
    elements.resetBtn.addEventListener('click', handleReset);
    elements.languageSelect.addEventListener('change', handleLanguageChange);
    elements.themeToggle.addEventListener('click', toggleTheme);
    
    elements.colorOptions.forEach(option => {
        option.addEventListener('click', () => {
            changeColorTheme(option.dataset.color);
            elements.colorOptions.forEach(opt => opt.classList.remove('active'));
            option.classList.add('active');
        });
    });
}

function handleCalculation() {
    const measurement = getInputValues();
    if(validateInputs(measurement)) {
        const result = calculateBMI(measurement);
        displayResults(result);
        updateHistory(result);
    }
}

function calculateBMI({ weight, feet, inches }) {
    const totalInches = (feet * 12) + inches;
    const heightMeters = totalInches * 0.0254;
    const bmi = weight / (heightMeters ** 2);
    
    return {
        value: bmi,
        category: getBMICategory(bmi),
        timestamp: new Date().toISOString()
    };
}

function displayResults({ value, category }) {
    elements.bmiValue.textContent = value.toFixed(1);
    elements.categoryDisplay.textContent = translations[appState.currentLanguage][category];
    elements.healthAdvice.innerHTML = healthAdvice[category][appState.currentLanguage].replace(/\n/g, '<br>');
    
    // Animate result display
    elements.resultDisplay.style.opacity = '1';
    elements.resultDisplay.style.transform = 'translateY(0)';
}

// Utility Functions
function updateUI() {
    document.documentElement.style.setProperty('--primary-color', appState.currentColor);
    document.documentElement.setAttribute('data-theme', appState.currentTheme);
    
    // Update all text elements
    Object.keys(translations[appState.currentLanguage]).forEach(key => {
        const element = document.querySelector(`[data-translate="${key}"]`);
        if(element) element.textContent = translations[appState.currentLanguage][key];
    });
}

function toggleTheme() {
    appState.currentTheme = appState.currentTheme === 'light' ? 'dark' : 'light';
    const icon = elements.themeToggle.querySelector('i');
    icon.classList.toggle('fa-moon');
    icon.classList.toggle('fa-sun');
    updateUI();
    persistState();
}

// Initialize Application
document.addEventListener('DOMContentLoaded', initializeApp);
