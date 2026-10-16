// ================= THEME & UI HELPERS =================
function initTheme() {
    const savedTheme = localStorage.getItem(STORAGE_KEY_THEME);
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
        updateThemeIcon(true);
    } else {
        document.documentElement.classList.remove('dark');
        updateThemeIcon(false);
    }
}

function toggleDarkMode() {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem(STORAGE_KEY_THEME, isDark ? 'dark' : 'light');
    updateThemeIcon(isDark);
}

function updateThemeIcon(isDark) {
    const icon = document.getElementById('theme-toggle-icon');
    if (isDark) {
        icon.className = 'fa-solid fa-sun text-lg text-amber-400';
    } else {
        icon.className = 'fa-solid fa-moon text-lg text-slate-600';
    }
}

function showToast(message, isSuccess = true) {
    const toast = document.getElementById('toast');
    const toastMsg = document.getElementById('toast-msg');
    const toastIcon = document.getElementById('toast-icon');

    toastMsg.textContent = message;
    toastIcon.className = isSuccess ? 'fa-solid fa-circle-check text-emerald-400' : 'fa-solid fa-circle-exclamation text-rose-400';

    toast.classList.remove('translate-y-[-150%]', 'opacity-0');
    toast.classList.add('translate-y-0', 'opacity-100');

    setTimeout(() => {
        toast.classList.remove('translate-y-0', 'opacity-100');
        toast.classList.add('translate-y-[-150%]', 'opacity-0');
    }, 3000);
}

// ================= TAB NAVIGATION =================
function switchTab(tabId) {
    // Hide all tab contents
    document.querySelectorAll('.tab-content').forEach(el => el.classList.add('hidden'));
    
    // Show selected content
    const activeTab = document.getElementById(`tab-${tabId}`);
    if (activeTab) activeTab.classList.remove('hidden');

    // Style Active Desktop Buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.className = 'tab-btn flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white';
    });
    const activeBtn = document.getElementById(`tab-btn-${tabId}`);
    if (activeBtn) {
        activeBtn.className = 'tab-btn flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all bg-white dark:bg-slate-800 text-brand-600 dark:text-brand-400 shadow-sm';
    }

    // Style Mobile Nav Buttons
    document.querySelectorAll('.mob-tab-btn').forEach(btn => {
        btn.className = 'mob-tab-btn flex flex-col items-center gap-1 p-2 rounded-lg text-xs font-semibold w-full text-slate-500 dark:text-slate-400';
    });
    const activeMobBtn = document.getElementById(`mob-tab-btn-${tabId}`);
    if (activeMobBtn) {
        activeMobBtn.className = 'mob-tab-btn flex flex-col items-center gap-1 p-2 rounded-lg text-xs font-semibold w-full text-brand-600 dark:text-brand-400 bg-white dark:bg-slate-800 shadow-sm';
    }

    // Refresh specific tab state if needed
    if (tabId === 'editor') {
        renderEditorQuestionsList();
    }
}


