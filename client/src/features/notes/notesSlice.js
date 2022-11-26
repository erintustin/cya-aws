import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { baseUrl } from '../../app/shared/baseUrl';
//import { NOTES } from '../../app/assets/Resources/NOTES';


export const fetchNotes = createAsyncThunk(
    'notes/fetchNotes',
    async () => {
        const response = await fetch(baseUrl + 'notes');
        if (!response.ok) {
            return Promise.reject('Unable to fetch, status: ' + response.status);
        }
        const data = await response.json();
        return data;
    }
);

export const postNote = createAsyncThunk(
    'notes/postNote',
    async (note, {dispatch}) => {
        const response = await fetch(baseUrl + 'notes', 
            { 'method': 'POST',
              'body': JSON.stringify(note),
              'headers': { 'Content-Type': 'application/json' }
            });
        if (!response.ok) {
            return Promise.reject(response.status);
        }
        const data = await response.json();
        dispatch(addNote(data));
    }
);

const initialState = {
    notesArray: [],
    isLoading: true,
    errMsg: ''
};

const notesSlice = createSlice({
    name: 'notes',
    initialState,
    reducers: {
        addNote: (state, action) => {
            console.log('addNote action.payload:', action.payload);
            console.log('addNote state.notesArray:', state.notesArray);
            const newNote = {
                id: state.notesArray.length + 1,
                ...action.payload
            };
            state.notesArray.push(newNote);
        },
        deleteNote: (state, payload) => {
            const noteId = payload.id;
            state.notesArray.splice(noteId, 1);
        }
    },
    extraReducers: {
        [fetchNotes.pending]: (state) => {
                state.isLoading = true;
            },
        [fetchNotes.fulfilled]: (state, action) => {
                state.isLoading = false;
                state.errMsg = '';
                state.notesArray = action.payload;
            },
        [fetchNotes.rejected]: (state, action) => {
                state.isLoading = false;
                state.errMsg = action.error ? action.error.message : 'Fetch failed';
            },

        [postNote.pending]: (state) => {
                state.isLoading = true;
            },
        
        [postNote.rejected]: (state, action) => {
                state.isLoading = false;
                state.errMsg = action.error ? action.error.message : 'Note failed';
            }
        }
});

export const notesReducer = notesSlice.reducer;

export const { addNote, deleteNote } = notesSlice.actions;

export const selectNotesByResource = (resource) => (state) => {
    return state.notes.notesArray.filter(
        (note) => note.resource === resource._id
    );
};