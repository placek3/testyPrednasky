// ================= TAB 3: TEST EDITOR =================

function renderEditorQuestionsList() {
    const container = document.getElementById('editor-questions-list');
    const countLabel = document.getElementById('editor-question-count');

    countLabel.textContent = `${questions.length} questions currently loaded`;
    container.innerHTML = '';

    if (questions.length === 0) {
        container.innerHTML = `
            <div class="text-center py-10 bg-white dark:bg-slate-800 rounded-2xl border border-dashed border-slate-300 dark:border-slate-700">
                <i class="fa-solid fa-folder-open text-3xl text-slate-300 dark:text-slate-600 mb-2"></i>
                <p class="text-slate-500 text-sm">No questions in your pool yet.</p>
            </div>
        `;
        return;
    }

    const prefixes = ['A', 'B', 'C', 'D'];

    questions.forEach((q, idx) => {
        const card = document.createElement('div');
        card.className = 'bg-white dark:bg-slate-800 p-5 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm relative group hover:border-brand-300 transition-all';

        let optionsHTML = '';
        q.options.forEach((opt, oIdx) => {
            const isCorrect = oIdx === q.correct;
            optionsHTML += `
                <div class="text-xs sm:text-sm px-2.5 py-1.5 rounded-lg border ${
                    isCorrect ? 'border-emerald-300 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 font-semibold' : 'border-slate-100 dark:border-slate-700/60 text-slate-600 dark:text-slate-400'
                }">
                    <span class="font-bold mr-1">${prefixes[oIdx]}:</span> ${escapeHTML(opt)}
                    ${isCorrect ? '<i class="fa-solid fa-check text-emerald-600 ml-1"></i>' : ''}
                </div>
            `;
        });

        card.innerHTML = `
            <div class="flex justify-between items-start gap-4 mb-3">
                <h4 class="font-bold text-slate-800 dark:text-slate-100 text-sm sm:text-base"><span class="text-brand-600 mr-1.5">Q${idx + 1}.</span>${escapeHTML(q.question)}</h4>
                <button data-action="delete-question" data-index="${idx}" class="text-slate-400 hover:text-rose-600 p-1 rounded-lg hover:bg-rose-50 dark:hover:bg-rose-950/50 transition-colors" title="Delete Question">
                    <i class="fa-solid fa-trash-can text-sm"></i>
                </button>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                ${optionsHTML}
            </div>
        `;

        container.appendChild(card);
    });
}

function handleSaveQuestion(event) {
    event.preventDefault();

    const questionText = document.getElementById('form-question').value.trim();
    const optA = document.getElementById('form-opt-A').value.trim();
    const optB = document.getElementById('form-opt-B').value.trim();
    const optC = document.getElementById('form-opt-C').value.trim();
    const optD = document.getElementById('form-opt-D').value.trim();
    const correctOpt = parseInt(document.getElementById('form-correct-opt').value, 10);

    if (!questionText || !optA || !optB || !optC || !optD) {
        showToast('Please fill in all fields', false);
        return;
    }

    const newQ = {
        question: questionText,
        options: [optA, optB, optC, optD],
        correct: correctOpt
    };

    questions.push(newQ);
    saveQuestionsToStorage();
    renderEditorQuestionsList();

    // Reset Form
    document.getElementById('question-form').reset();
    showToast('New question added!');
}

function deleteQuestion(index) {
    questions.splice(index, 1);
    saveQuestionsToStorage();
    renderEditorQuestionsList();
    showToast('Question deleted');
}

function saveQuestionsToStorage() {
    localStorage.setItem(STORAGE_KEY_QUESTIONS, JSON.stringify(questions));
}

function resetDefaultQuestions() {
    if (confirm('Are you sure you want to reset to the default question set? Custom questions will be replaced.')) {
        questions = [...DEFAULT_QUESTIONS];
        saveQuestionsToStorage();
        renderEditorQuestionsList();
        restartTest();
        showToast('Reset to default questions');
    }
}

function exportQuestionsJSON() {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(questions, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", "prepnote_quiz_questions.json");
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    showToast('Questions exported as JSON!');
}

function importQuestionsJSON(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const importedData = JSON.parse(e.target.result);
            if (Array.isArray(importedData) && importedData.length > 0 && importedData[0].question && importedData[0].options) {
                questions = importedData;
                saveQuestionsToStorage();
                renderEditorQuestionsList();
                restartTest();
                showToast(`Successfully imported ${questions.length} questions!`);
            } else {
                showToast('Invalid JSON question format', false);
            }
        } catch (err) {
            showToast('Failed to parse JSON file', false);
        }
    };
    reader.readAsText(file);
}

// Helper: Escape HTML string to prevent XSS
function escapeHTML(str) {
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}
