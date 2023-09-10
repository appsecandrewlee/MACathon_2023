import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    token: null,
    uid: null,
    email: null,
    preferredLanguage: null,
    // Add any other user-related states here
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserData: (state, action) => {
            state.token = action.payload.token;
            state.uid = action.payload.uid;
            state.email = action.payload.email;
            state.preferredLanguage = action.payload.preferredLanguage;
            // Add any other user-related data updates here
        },
        clearUserData: state => {
            state.token = null;
            state.uid = null;
            state.email = null;
            state.preferredLanguage = null;
            // Reset any other user-related data here
        }
    }
});

export const { setUserData, clearUserData } = userSlice.actions;

export default userSlice.reducer;
