import { createSlice } from '@reduxjs/toolkit';

export const userEditSlice = createSlice({
    name: 'user-edit',
    initialState: { 
        isUserEditVisible: false
    },
    reducers: {
        showUserEdit: (state) => {
            state.isUserEditVisible = true;
        },
        hideUserEdit: (state) => {
            state.isUserEditVisible = false;
        }
    },
    });

export const { showUserEdit, hideUserEdit } = userEditSlice.actions;

export default userEditSlice.reducer;

export const selectIsUserEditVisible = (state) => state.userEdit.isUserEditVisible;
