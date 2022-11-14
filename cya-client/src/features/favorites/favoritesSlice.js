import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { baseUrl } from '../../app/shared/baseUrl';


export const fetchFavorites = createAsyncThunk(
    'favorites/fetchFavorites',
    async () => {
        const response = await fetch(baseUrl + 'favorites');
        if (!response.ok) {
            return Promise.reject('Unable to fetch, status: ' + response.status);
        }
        const data = await response.json();
        return data;
    }
);

export const postFavorite = createAsyncThunk(
    'favorites/postFavorite',
    async (favorite, {dispatch}) => {
        const response = await fetch(baseUrl + 'favorites', 
            { 'method': 'POST',
              'body': JSON.stringify(favorite),
              'headers': { 'Content-Type': 'application/json' }
            });
        if (!response.ok) {
            return Promise.reject(response.status);
        }
        const data = await response.json();
        dispatch(markFavorite(data));
    }
);

const initialState = {
    favoritesArray: [],
    isLoading: true,
    errMsg: ''
};

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        markFavorite: (state, action) => {
            console.log('markFavorite action.payload:', action.payload);
            console.log('markFavorite state.favoritesArray:', state.favoritesArray);
            const addFavorite = {
                id: state.favoritesArray.length + 1,
                ...action.payload
            };
            state.favoritesArray.push(addFavorite);
        },
        unMarkFavorite: (state, payload) => {
            const favoriteId = payload.id;
            state.favoritesArray.splice(favoriteId, 1);
            console.log('unMarkFavorite state.favoritesArray:', state.favoritesArray);
        }
    },
    extraReducers: {
        [fetchFavorites.pending]: (state) => {
                state.isLoading = true;
            },
        [fetchFavorites.fulfilled]: (state, action) => {
                state.isLoading = false;
                state.errMsg = '';
                state.favoritesArray = action.payload;
            },
        [fetchFavorites.rejected]: (state, action) => {
                state.isLoading = false;
                state.errMsg = action.error ? action.error.message : 'Fetch failed';
            },

        [postFavorite.pending]: (state) => {
                state.isLoading = true;
            },
        
        [postFavorite.rejected]: (state, action) => {
                state.isLoading = false;
                state.errMsg = action.error ? action.error.message : 'Add Favorite failed';
            }
        }
});

export const favoritesReducer = favoritesSlice.reducer;

export const { markFavorite, unMarkFavorite } = favoritesSlice.actions;

export const selectFavorites = (state) => {
    return state.favorites.favoritesArray;
};
