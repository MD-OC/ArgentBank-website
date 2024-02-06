import { createSlice } from '@reduxjs/toolkit';

export const profileSlice = createSlice({
    name: 'profile',
    initialState: { 
        id: null,
        firstName: null,
        lastName: null,
        email: null,
        userName: null
    },
    reducers: {
        setProfile: (state, action) => {
            const { id, firstName, lastName, email, userName } = action.payload
            state.id = id;
            state.firstName = firstName;
            state.lastName = lastName;
            state.email = email;
            state.userName = userName;
        },
        resetProfile: (state) => {
            state.id = null;
            state.firstName = null;
            state.lastName = null;
            state.email = null;
            state.userName = null;
        }
    },
    });

export const { setProfile, resetProfile } = profileSlice.actions;

export default profileSlice.reducer;

export const selectUserFirstName = (state) => state.profile.firstName;
export const selectUserLastName = (state) => state.profile.lastName;
