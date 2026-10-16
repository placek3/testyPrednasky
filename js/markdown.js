// ================= TAB 2: MARKDOWN VIEWER =================
const STORAGE_KEY_MARKDOWN_EDITOR_VISIBLE = 'prepnote_markdown_editor_visible_v1';
const STORAGE_KEY_MARKDOWN_PREVIEW_VISIBLE = 'prepnote_markdown_preview_visible_v1';
const STORAGE_KEY_MARKDOWN_SOURCE = 'prepnote_markdown_source_v1';

async function readLocalFile(path) {
    const response = await fetch(path);

    if (!response.ok) {
        throw new Error(`Could not load Markdown file: ${response.status}`);
    }

    return response.text();
}

function initMarkdownEditor() {
    const savedEditorVisibility = localStorage.getItem(STORAGE_KEY_MARKDOWN_EDITOR_VISIBLE);
    const savedPreviewVisibility = localStorage.getItem(STORAGE_KEY_MARKDOWN_PREVIEW_VISIBLE);
    setMarkdownEditorVisible(savedEditorVisibility !== 'false');
    setMarkdownPreviewVisible(savedPreviewVisibility !== 'false');
}

function toggleMarkdownEditor() {
    const editorPanel = document.getElementById('markdown-editor-panel');
    const isVisible = editorPanel.classList.contains('hidden');
    setMarkdownEditorVisible(isVisible);
    localStorage.setItem(STORAGE_KEY_MARKDOWN_EDITOR_VISIBLE, String(isVisible));
}

function toggleMarkdownPreview() {
    const previewPanel = document.getElementById('markdown-preview-panel');
    const isVisible = previewPanel.classList.contains('hidden');
    setMarkdownPreviewVisible(isVisible);
    localStorage.setItem(STORAGE_KEY_MARKDOWN_PREVIEW_VISIBLE, String(isVisible));
}

function setMarkdownPreviewVisible(isVisible) {
    const previewPanel = document.getElementById('markdown-preview-panel');
    previewPanel.classList.toggle('hidden', !isVisible);
    document.getElementById('markdown-preview-toggle').setAttribute('aria-expanded', String(isVisible));
    document.getElementById('markdown-preview-toggle-label').textContent = isVisible ? 'Hide Preview' : 'Show Preview';
    document.getElementById('markdown-preview-toggle-icon').className = isVisible
        ? 'fa-solid fa-eye-slash'
        : 'fa-solid fa-eye';
    updateMarkdownWorkspace();
}

function setMarkdownEditorVisible(isVisible) {
    const editorPanel = document.getElementById('markdown-editor-panel');
    editorPanel.classList.toggle('hidden', !isVisible);
    document.getElementById('markdown-editor-toggle').setAttribute('aria-expanded', String(isVisible));
    document.getElementById('markdown-editor-toggle-label').textContent = isVisible ? 'Hide Editor' : 'Show Editor';
    document.getElementById('markdown-editor-toggle-icon').className = isVisible
        ? 'fa-solid fa-eye-slash'
        : 'fa-solid fa-code';
    updateMarkdownWorkspace();
}

function updateMarkdownWorkspace() {
    const workspace = document.getElementById('markdown-workspace');
    const editorPanel = document.getElementById('markdown-editor-panel');
    const previewPanel = document.getElementById('markdown-preview-panel');
    const bothPanelsVisible = !editorPanel.classList.contains('hidden')
        && !previewPanel.classList.contains('hidden');

    workspace.classList.toggle('md:grid-cols-2', bothPanelsVisible);
    editorPanel.classList.toggle('md:col-span-2', !bothPanelsVisible);
    previewPanel.classList.toggle('md:col-span-2', !bothPanelsVisible);
}

async function loadMarkdown(path = './VAII/t1/out.md') {
    const savedMarkdown = localStorage.getItem(STORAGE_KEY_MARKDOWN);
    const loadedSource = localStorage.getItem(STORAGE_KEY_MARKDOWN_SOURCE);
    let text;

    if (loadedSource === path && savedMarkdown !== null) {
        text = savedMarkdown;
    } else {
        try {
            text = await readLocalFile(path);
            localStorage.setItem(STORAGE_KEY_MARKDOWN_SOURCE, path);
        } catch (error) {
            console.error(`Could not load Markdown file "${path}".`, error);
            text = savedMarkdown && savedMarkdown !== path ? savedMarkdown : DEFAULT_MARKDOWN;
            showToast('Could not load out.md. Open this page through a local web server.', false);
        }
    }

    document.getElementById('markdown-input').value = text;
    updateMarkdownPreview();
}

function updateMarkdownPreview() {
    const input = document.getElementById('markdown-input').value;
    localStorage.setItem(STORAGE_KEY_MARKDOWN, input);

    // Update Char Count
    document.getElementById('char-count').textContent = `${input.length} chars`;

    // Parse and Render Markdown using Marked.js
    try {
        const rendered = marked.parse(input);
        document.getElementById('markdown-preview').innerHTML = rendered;
    } catch (err) {
        document.getElementById('markdown-preview').innerHTML = `<p class="text-rose-500">Error parsing Markdown: ${err.message}</p>`;
    }
}

function importMarkdownFile(event) {
    const input = event.target;
    const file = input.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
        if (typeof reader.result !== 'string') {
            showToast('Failed to read Markdown file', false);
            return;
        }

        document.getElementById('markdown-input').value = reader.result;
        updateMarkdownPreview();
        showToast('Markdown file imported!');
    };
    reader.onerror = () => showToast('Failed to read Markdown file', false);

    try {
        reader.readAsText(file);
    } catch (error) {
        showToast('Failed to read Markdown file', false);
    } finally {
        input.value = '';
    }
}

function clearMarkdownText() {
    document.getElementById('markdown-input').value = '';
    updateMarkdownPreview();
    showToast('Markdown cleared');
}

function copyRenderedHTML() {
    const previewHTML = document.getElementById('markdown-preview').innerHTML;
    
    // Clipboard Copy Fallback Safe Implementation
    const tempTextArea = document.createElement('textarea');
    tempTextArea.value = previewHTML;
    document.body.appendChild(tempTextArea);
    tempTextArea.select();
    document.execCommand('copy');
    document.body.removeChild(tempTextArea);

    showToast('Rendered HTML copied to clipboard!');
}