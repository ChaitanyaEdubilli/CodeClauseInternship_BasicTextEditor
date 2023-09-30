// DOM elements
const editor = document.getElementById('editor');
const saveButton = document.getElementById('save');
const loadButton = document.getElementById('load');

// Save text to local storage
saveButton.addEventListener('click', () => {
    const content = editor.value;
    localStorage.setItem('editorContent', content);
    alert('Text saved successfully!');
});

// Load text from local storage
loadButton.addEventListener('click', () => {
    const savedContent = localStorage.getItem('editorContent');
    if (savedContent !== null) {
        editor.value = savedContent;
        alert('Text loaded successfully!');
    } else {
        alert('No saved text found.');
    }
});
