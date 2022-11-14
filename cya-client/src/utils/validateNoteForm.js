export const validateNoteForm = (values) => {
    const errors = {};
    if (values.noteText.length < 2) {
            errors.noteText = 'Must be at least 2 characters';
    };
    return errors;
};

