// Initialize App on DOM Load
document.addEventListener('DOMContentLoaded', async () => {
    initTheme();
    loadQuestions();
    initMarkdownEditor();
    switchTab('test');

    document.addEventListener('click', (event) => {
        const button = event.target.closest('[data-action]');
        if (!button) return;

        switch (button.dataset.action) {
            case 'switch-tab':
                switchTab(button.dataset.tab);
                break;
            case 'toggle-theme':
                toggleDarkMode();
                break;
            case 'shuffle-questions':
                shuffleQuestions();
                break;
            case 'restart-test':
                restartTest();
                break;
            case 'previous-question':
                prevQuestion();
                break;
            case 'next-question':
                nextQuestion();
                break;
            case 'clear-markdown':
                clearMarkdownText();
                break;
            case 'copy-rendered-html':
                copyRenderedHTML();
                break;
            case 'toggle-markdown-editor':
                toggleMarkdownEditor();
                break;
            case 'toggle-markdown-preview':
                toggleMarkdownPreview();
                break;
            case 'export-questions':
                exportQuestionsJSON();
                break;
            case 'reset-questions':
                resetDefaultQuestions();
                break;
            case 'delete-question':
                deleteQuestion(Number(button.dataset.index));
                break;
        }
    });

    document.getElementById('markdown-input').addEventListener('input', updateMarkdownPreview);
    document.getElementById('question-form').addEventListener('submit', handleSaveQuestion);
    document.getElementById('import-json-file').addEventListener('change', importQuestionsJSON);
    document.getElementById('import-markdown-file').addEventListener('change', importMarkdownFile);

    await loadMarkdown('./VAII/t1/out.md');
});
