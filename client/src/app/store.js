import { configureStore } from '@reduxjs/toolkit'

import authReducer from '../features/auth/authSlice';
import profileReducer from '../features/dashboard/dashboardSlice';
import userEditReducer from '../features/user-edit/userEditSlice';
import { apiService } from './api/apiSlice';

export default configureStore({
    reducer: {
        [apiService.reducerPath]: apiService.reducer,
        auth: authReducer,
        profile: profileReducer,
        userEdit: userEditReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiService.middleware),
});
