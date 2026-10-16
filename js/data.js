// Default ABCD Questions Data
const DEFAULT_QUESTIONS = [
    {
        question: "Which HTML tag is used to embed an external JavaScript file?",
        options: ["<script src=\"...\">", "<javascript link=\"...\">", "<js src=\"...\">", "<link rel=\"script\" href=\"...\">"],
        correct: 0
    },
    {
        question: "What does CSS stand for?",
        options: ["Creative Style Sheets", "Cascading Style Sheets", "Computer Style Syntax", "Colorful Style System"],
        correct: 1
    },
    {
        question: "In JavaScript, which keyword is used to declare a block-scoped variable?",
        options: ["var", "define", "let", "global"],
        correct: 2
    },
    {
        question: "Which of the following is NOT a valid JavaScript data type?",
        options: ["Undefined", "Boolean", "Float", "Symbol"],
        correct: 2
    },
    {
        question: "What is the primary function of the document.querySelector() method?",
        options: ["To select and return the first element matching a CSS selector", "To create a new HTML element", "To delete an element from the DOM", "To query a backend database"],
        correct: 0
    }
];


// Default Markdown Content
const DEFAULT_MARKDOWN = `# Welcome to PrepNote Studio 🚀

PrepNote allows you to learn interactively and preview your study notes simultaneously!

## Key Features

1. **Interactive ABCD Quizzes** - Test your knowledge with immediate feedback.
2. **Markdown Previewer** - Write clean, beautiful study notes using simple formatting.
3. **Custom Test Creator** - Build and export your own question sets easily.

---

### Markdown Formatting Quick Guide

* **Bold text** using \`**bold**\`
* *Italic text* using \`*italics*\`
* Blockquotes for important takeaways:

> "Continuous learning is the minimum requirement for success in any field."

### Code Example

\`\`\`javascript
// Quick JavaScript snippet
function greetUser(name) {
    console.log(\`Hello, \${name}! Ready to study?\`);
}

greetUser('Learner');
\`\`\`

Feel free to edit this text on the left to see live changes on the right!`;

// State Variables
let questions = [];
let currentQuestionIdx = 0;
let userAnswers = {}; // Map: questionIdx -> selectedOptionIdx

// Local Storage Keys
const STORAGE_KEY_QUESTIONS = 'prepnote_questions_v1';
const STORAGE_KEY_MARKDOWN = 'prepnote_markdown_v1';
const STORAGE_KEY_THEME = 'prepnote_theme_v1';

