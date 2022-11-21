//import { RESOURCES } from '../../app/assets/Resources/RESOURCES';
import {createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { baseUrl } from '../../app/shared/baseUrl';
import { mapImageURL } from '../../utils/mapImageURL';

export const fetchResources = createAsyncThunk(
    'resources/fetchResources',
    async () => {
        const response = await fetch(baseUrl + 'CYA/resources');
        if (!response.ok) {
            return Promise.reject('Unable to fetch, status: ' + response.status);
        }
        const data = await response.json();
        return data;
    }
);

const initialState = {
    resourcesArray: [],
    isLoading: true,
    errMsg:''
};

const resourcesSlice = createSlice({
    name: 'resources',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchResources.pending]: (state) => {
            state.isLoading = true;
        },
        [fetchResources.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.errMsg = '';
            state.resourcesArray = mapImageURL(action.payload);
        },
        [fetchResources.rejected]: (state, action) => {
            state.isLoading = false;
            state.errMsg = action.error ? action.error.message : 'Fetch failed';
        }
    }
});

export const resourcesReducer = resourcesSlice.reducer;

export const selectAllResources = (state) => {
    return state.resources.resourcesArray;
};

export const selectResourceById = (id) => (state) => {
    return state.resources.resourcesArray.find((resource) => resource.id === parseInt(id));

};

export const selectFeaturedResources = (state) => {
    return state.resources.resourcesArray.filter(
        (resource) => resource.featured
    );
};

export const selectResourcesByType = (type) => (state) => {
    return state.resources.resourcesArray.filter((resource) => resource.type === type);

};