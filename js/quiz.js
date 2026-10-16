// ================= TAB 1: ABCD TEST CONTROLLER =================
function loadQuestions() {
    const saved = localStorage.getItem(STORAGE_KEY_QUESTIONS);
    if (saved) {
        try {
            questions = JSON.parse(saved);
        } catch (e) {
            questions = [...DEFAULT_QUESTIONS];
        }
    } else {
        questions = [...DEFAULT_QUESTIONS];
    }
    restartTest();
}

function restartTest() {
    currentQuestionIdx = 0;
    userAnswers = {};
    document.getElementById('quiz-active-view').classList.remove('hidden');
    document.getElementById('quiz-results-view').classList.add('hidden');
    renderCurrentQuestion();
}

function shuffleQuestions() {
    for (let i = questions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [questions[i], questions[j]] = [questions[j], questions[i]];
    }
    showToast('Questions shuffled successfully!');
    restartTest();
}

function renderCurrentQuestion() {
    if (!questions || questions.length === 0) {
        document.getElementById('question-text').textContent = "No questions available. Please add questions in the Test Editor tab!";
        document.getElementById('options-container').innerHTML = '';
        return;
    }

    const q = questions[currentQuestionIdx];
    const total = questions.length;

    // Update Progress Header
    document.getElementById('question-progress-label').textContent = `Question ${currentQuestionIdx + 1} of ${total}`;
    const pct = ((currentQuestionIdx + 1) / total) * 100;
    document.getElementById('quiz-progress-bar').style.width = `${pct}%`;

    // Question Text
    document.getElementById('question-text').textContent = q.question;

    // Render Option Buttons
    const container = document.getElementById('options-container');
    container.innerHTML = '';

    const prefixes = ['A', 'B', 'C', 'D'];
    q.options.forEach((optText, optIdx) => {
        const isSelected = userAnswers[currentQuestionIdx] === optIdx;
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.onclick = () => selectOption(optIdx);

        btn.className = `w-full text-left p-4 rounded-xl border-2 transition-all flex items-center justify-between group ${
            isSelected 
            ? 'border-brand-600 bg-brand-50/50 dark:bg-brand-900/20 text-brand-900 dark:text-brand-100 font-medium shadow-sm' 
            : 'border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 text-slate-700 dark:text-slate-200 bg-slate-50/30 dark:bg-slate-800/50'
        }`;

        btn.innerHTML = `
            <div class="flex items-center gap-3">
                <span class="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs transition-colors ${
                    isSelected 
                    ? 'bg-brand-600 text-white' 
                    : 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 group-hover:bg-slate-300 dark:group-hover:bg-slate-600'
                }">${prefixes[optIdx]}</span>
                <span class="text-sm sm:text-base">${escapeHTML(optText)}</span>
            </div>
            <div class="w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                isSelected ? 'border-brand-600 bg-brand-600' : 'border-slate-300 dark:border-slate-600'
            }">
                ${isSelected ? '<i class="fa-solid fa-check text-white text-xs"></i>' : ''}
            </div>
        `;

        container.appendChild(btn);
    });

    // Navigation Button States
    const btnPrev = document.getElementById('btn-prev-question');
    const btnNext = document.getElementById('btn-next-question');

    btnPrev.disabled = currentQuestionIdx === 0;

    if (currentQuestionIdx === total - 1) {
        btnNext.innerHTML = 'Finish Test <i class="fa-solid fa-flag-checkered"></i>';
        btnNext.className = 'px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm shadow-md transition-all flex items-center gap-2';
    } else {
        btnNext.innerHTML = 'Next <i class="fa-solid fa-arrow-right"></i>';
        btnNext.className = 'px-6 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-semibold text-sm shadow-md shadow-brand-500/20 transition-all flex items-center gap-2';
    }
}

function selectOption(optIdx) {
    userAnswers[currentQuestionIdx] = optIdx;
    renderCurrentQuestion();
}

function prevQuestion() {
    if (currentQuestionIdx > 0) {
        currentQuestionIdx--;
        renderCurrentQuestion();
    }
}

function nextQuestion() {
    if (userAnswers[currentQuestionIdx] === undefined) {
        showToast('Please select an option before proceeding', false);
        return;
    }

    if (currentQuestionIdx < questions.length - 1) {
        currentQuestionIdx++;
        renderCurrentQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    document.getElementById('quiz-active-view').classList.add('hidden');
    document.getElementById('quiz-results-view').classList.remove('hidden');

    let correctCount = 0;
    questions.forEach((q, idx) => {
        if (userAnswers[idx] === q.correct) {
            correctCount++;
        }
    });

    const scorePct = Math.round((correctCount / questions.length) * 100);

    // Update Badge
    const badge = document.getElementById('score-badge');
    badge.textContent = `${scorePct}%`;
    if (scorePct >= 80) {
        badge.className = 'w-24 h-24 mx-auto rounded-full flex items-center justify-center text-3xl font-black mb-4 border-4 shadow-inner border-emerald-500 text-emerald-600 bg-emerald-50 dark:bg-emerald-950/30';
    } else if (scorePct >= 50) {
        badge.className = 'w-24 h-24 mx-auto rounded-full flex items-center justify-center text-3xl font-black mb-4 border-4 shadow-inner border-amber-500 text-amber-600 bg-amber-50 dark:bg-amber-950/30';
    } else {
        badge.className = 'w-24 h-24 mx-auto rounded-full flex items-center justify-center text-3xl font-black mb-4 border-4 shadow-inner border-rose-500 text-rose-600 bg-rose-50 dark:bg-rose-950/30';
    }

    document.getElementById('score-summary-text').textContent = `You scored ${correctCount} out of ${questions.length} questions correctly.`;

    // Build Answer Review List
    const reviewContainer = document.getElementById('review-list-container');
    reviewContainer.innerHTML = '';

    const prefixes = ['A', 'B', 'C', 'D'];

    questions.forEach((q, idx) => {
        const userChoice = userAnswers[idx];
        const isCorrect = userChoice === q.correct;

        const card = document.createElement('div');
        card.className = `p-4 rounded-xl border ${
            isCorrect ? 'border-emerald-200 dark:border-emerald-900/50 bg-emerald-50/30 dark:bg-emerald-950/10' : 'border-rose-200 dark:border-rose-900/50 bg-rose-50/30 dark:bg-rose-950/10'
        }`;

        card.innerHTML = `
            <div class="flex items-start justify-between gap-3 mb-2">
                <span class="text-xs font-bold text-slate-500 uppercase">Q${idx + 1}</span>
                <span class="text-xs font-bold px-2.5 py-0.5 rounded-full ${
                    isCorrect ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200' : 'bg-rose-100 text-rose-800 dark:bg-rose-900 dark:text-rose-200'
                }">${isCorrect ? 'Correct' : 'Incorrect'}</span>
            </div>
            <p class="font-semibold text-slate-800 dark:text-slate-100 mb-3 text-sm sm:text-base">${escapeHTML(q.question)}</p>
            <div class="space-y-1.5 text-xs sm:text-sm">
                <div class="flex items-center gap-2 ${isCorrect ? 'text-emerald-700 dark:text-emerald-400 font-medium' : 'text-rose-700 dark:text-rose-400'}">
                    <span>Your Answer:</span>
                    <span class="font-bold">${prefixes[userChoice]}: ${escapeHTML(q.options[userChoice] || 'None')}</span>
                </div>
                ${!isCorrect ? `
                <div class="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-medium">
                    <span>Correct Answer:</span>
                    <span class="font-bold">${prefixes[q.correct]}: ${escapeHTML(q.options[q.correct])}</span>
                </div>
                ` : ''}
            </div>
        `;

        reviewContainer.appendChild(card);
    });
}


