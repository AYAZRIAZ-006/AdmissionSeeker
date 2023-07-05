import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "../../config/axios";
import axios from "../../config/axios.js"

export const login = createAsyncThunk('auth/login', async (user, thunkAPI) => {
    try {
        // console.log("i am in login 1");
        const { data } = await axios.post('/auth/signin', user, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log("i am in login 2");
        console.log({data})
        return data;
    } catch (err) {
        if (err.response && err.response.data) {
            return thunkAPI.rejectWithValue({
                error: err.response.data,
                status: err.response.status,
            });
        } else {
            return thunkAPI.rejectWithValue({
                error: {
                    success: false,
                    message: "Network Error"
                }
            });
        }
    }
});
export const register = createAsyncThunk('auth/register', async (user, thunkAPI) => {
    try {
        const { data } = await axios.post('/auth/register', user, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return data;
    } catch (err) {
        if (err.response && err.response.data) {
            return thunkAPI.rejectWithValue({
                error: err.response.data,
                status: err.response.status,
            });
        } else {
            return thunkAPI.rejectWithValue({
                error: {
                    success: false,
                    message: "Network Error"
                }
            });
        }
    }
});

export const checkToken = createAsyncThunk('auth/checkToken', async (thunkAPI) => {
    try {
        const { data } = await axios.get('/auth/checktoken');
        return data;
    } catch (err) {
        if (err.response && err.response.data) {
            return thunkAPI.rejectWithValue({
                error: err.response.data,
                status: err.response.status,
            });
        } else {
            return thunkAPI.rejectWithValue({
                error: {
                    success: false,
                    message: "Network Error"
                }
            });
        }
    }
});



const authSlice = createSlice({
    name: "auth",
    initialState: {
        isLoggedIn: false,
        university: {},
        error: {
            status: '',
            success: false,
            message: '',
        },
        loading: false,
    },
    reducers: {
        Logout: (state) => {
            state.isLoggedIn = false;
            state.user = {};
            state.error = {};
        },
        ClearError: (state) => {
            state.error.status = '';
            state.error.success = false;
            state.error.message = '';
        },
    },
    extraReducers: {
        [login.pending]: (state) => {
            state.loading = true;
        },
        [login.fulfilled]: (state, action) => {
            console.log("login sucess", action.payload);
            state.loading = false;
            state.university = action.payload.results.university;
            state.isLoggedIn = true;
            //set user to localStorege
            const { authToken, university } = action.payload.results;
            console.log("toms", JSON.stringify(authToken));
            localStorage.setItem('university', JSON.stringify(university));
            localStorage.setItem('authToken', authToken);
        },
        [login.rejected]: (state, action) => {
            const { error, status } = action.payload;
            const addErrorStatus = { ...error, status };
            state.loading = false;
            state.error = addErrorStatus;
            state.isLoggedIn = false;
        },
        [register.pending]: (state) => {
            state.loading = true;
        },
        [register.fulfilled]: (state, action) => {
            state.loading = false;
            state.user = action.payload.university;
            state.isLoggedIn = true;
            //set user to localStorege
            const { university } = action.payload;
            // localStorage.setItem('authToken', JSON.stringify(token));
            localStorage.setItem('university', JSON.stringify(university));
        },
        [register.rejected]: (state, action) => {
            const { error, status } = action.payload;
            const addErrorStatus = { ...error, status };
            state.loading = false;
            state.error = addErrorStatus;
            state.isLoggedIn = false;
        },
        [checkToken.pending]: (state) => {
            state.loading = true;
        },
        [checkToken.fulfilled]: (state, action) => {
            state.isLoggedIn = true;
            state.user = action.payload.user;
            state.loading = false;

        },
        [checkToken.rejected]: (state) => {
            state.loading = false;
            state.isLoggedIn = false;
            state.user = {};
        },
    }
})
const { reducer, actions } = authSlice;
export const { ClearError, Logout } = actions;
export default reducer;
