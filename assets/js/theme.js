/* Luxe CRM Theme Engine */

const LuxeTheme = {
    init() {
        this.themeToggleBtn = document.getElementById('theme-toggle');
        this.bindEvents();
        this.loadSavedTheme();
    },

    bindEvents() {
        if (this.themeToggleBtn) {
            this.themeToggleBtn.addEventListener('click', () => this.toggle());
        }
    },

    toggle() {
        const isDark = !document.documentElement.classList.contains('dark');
        this.apply(isDark);
    },

    apply(isDark) {
        document.documentElement.classList.toggle('dark', isDark);
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    },

    loadSavedTheme() {
        const savedTheme = localStorage.getItem('theme');
        const preferDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        if (savedTheme === 'dark' || (!savedTheme && preferDark)) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }
};

// Auto-init on DOM contents loaded
document.addEventListener('DOMContentLoaded', () => LuxeTheme.init());
