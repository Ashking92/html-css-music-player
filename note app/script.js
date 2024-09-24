document.addEventListener('DOMContentLoaded', () => {
    const saveNoteButton = document.getElementById('saveNote');
    const noteTitleInput = document.getElementById('noteTitle');
    const noteContentInput = document.getElementById('noteContent');
    const notesList = document.getElementById('notesList');

    // Load existing notes from localStorage
    const loadNotes = () => {
        const notes = JSON.parse(localStorage.getItem('notes')) || [];
        notesList.innerHTML = notes.map(note => `
            <div class="note-item">
                <h3>${note.title}</h3>
                <p>${note.content}</p>
            </div>
        `).join('');
    };

    loadNotes();

    // Save a new note
    saveNoteButton.addEventListener('click', () => {
        const title = noteTitleInput.value;
        const content = noteContentInput.value;

        if (title && content) {
            const notes = JSON.parse(localStorage.getItem('notes')) || [];
            notes.push({ title, content });
            localStorage.setItem('notes', JSON.stringify(notes));

            // Clear input fields
            noteTitleInput.value = '';
            noteContentInput.value = '';

            // Reload notes
            loadNotes();
        } else {
            alert('Please fill out both fields.');
        }
    });
});
