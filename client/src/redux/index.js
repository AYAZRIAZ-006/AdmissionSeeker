import { configureStore } from '@reduxjs/toolkit'

import authReducer from './slices/auth'

const store = configureStore({
    reducer: {
        auth: authReducer,
    }
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store;