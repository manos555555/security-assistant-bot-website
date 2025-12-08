// i18n Manager for Website
class I18nManager {
    constructor() {
        this.currentLang = this.getStoredLanguage() || 'en';
        this.translations = translations;
    }
    
    // Get stored language from localStorage
    getStoredLanguage() {
        return localStorage.getItem('website_language');
    }
    
    // Store language preference
    storeLanguage(lang) {
        localStorage.setItem('website_language', lang);
    }
    
    // Switch language
    switchLanguage(lang) {
        const validLangs = ['en', 'el', 'de', 'fr', 'es', 'tr', 'ru', 'pt'];
        console.log('Switching to language:', lang);
        
        if (!validLangs.includes(lang)) {
            console.error('Invalid language:', lang);
            return;
        }
        
        // Check if translation exists
        if (!this.translations[lang]) {
            console.error('Translation not found for:', lang);
            console.log('Available languages:', Object.keys(this.translations));
            return;
        }
        
        this.currentLang = lang;
        this.storeLanguage(lang);
        console.log('Language set to:', this.currentLang);
        this.updatePage();
        this.updateLanguageButtons();
    }
    
    // Get translation by path (e.g., 'hero.title')
    get(path) {
        const keys = path.split('.');
        let value = this.translations[this.currentLang];
        
        for (const key of keys) {
            if (value && typeof value === 'object') {
                value = value[key];
            } else {
                return path; // Return path if translation not found
            }
        }
        
        return value || path;
    }
    
    // Update all page content
    updatePage() {
        // Update HTML lang attribute
        document.documentElement.lang = this.currentLang;
        
        // Update all elements with data-i18n attribute
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            const translation = this.get(key);
            
            if (translation) {
                element.textContent = translation;
            }
        });
        
        // Update all elements with data-i18n-html attribute (for HTML content)
        document.querySelectorAll('[data-i18n-html]').forEach(element => {
            const key = element.getAttribute('data-i18n-html');
            const translation = this.get(key);
            
            if (translation) {
                element.innerHTML = translation;
            }
        });
        
        // Update placeholders
        document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
            const key = element.getAttribute('data-i18n-placeholder');
            const translation = this.get(key);
            
            if (translation) {
                element.placeholder = translation;
            }
        });
        
        // Update pricing features
        this.updatePricingFeatures();
    }
    
    // Update pricing features based on language
    updatePricingFeatures() {
        const tiers = ['starter', 'premium', 'vip', 'business'];
        const pricingCards = document.querySelectorAll('.pricing-card');
        
        tiers.forEach((tier, index) => {
            const card = pricingCards[index + 1]; // +1 to skip FREE tier
            if (!card) return;
            
            const featuresList = card.querySelector('.pricing-features');
            if (!featuresList) return;
            
            const features = this.get(`pricing.${tier}.features`);
            if (features && Array.isArray(features)) {
                // Clear existing features
                featuresList.innerHTML = '';
                
                // Add new features
                features.forEach(feature => {
                    const li = document.createElement('li');
                    li.textContent = feature;
                    featuresList.appendChild(li);
                });
            }
        });
    }
    
    // Update language button states
    updateLanguageButtons() {
        document.querySelectorAll('.lang-btn').forEach(btn => {
            const btnLang = btn.getAttribute('data-lang');
            if (btnLang === this.currentLang) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    }
    
    // Initialize i18n
    init() {
        this.updatePage();
        this.updateLanguageButtons();
        
        // Add event listeners to language buttons
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const lang = btn.getAttribute('data-lang');
                this.switchLanguage(lang);
            });
        });
    }
}

// Create global i18n instance
const i18n = new I18nManager();

// Debug: Check translations object
console.log('🌐 Translations object loaded:', typeof translations !== 'undefined');
if (typeof translations !== 'undefined') {
    console.log('🌐 Available languages:', Object.keys(translations));
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    console.log('🌐 DOM loaded, initializing i18n...');
    i18n.init();
    console.log('🌐 i18n initialized, current language:', i18n.currentLang);
    console.log('🌐 Language buttons found:', document.querySelectorAll('.lang-btn').length);
});
