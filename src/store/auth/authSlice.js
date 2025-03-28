import { display } from '@mui/system';
import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice ({
    name: 'auth',
    initialState: {
        status: 'checking', //checking
        uid: null,
        email: null,
        displayName: null,    
        photoURL: null,
        errorMessage: null
    },
    reducers: {
        login: ( state,  {payload} ) => {
            state.status = 'authenticated' //checking
            state.uid = payload.uid; 
            state.email = payload.email; 
            state.displayName = payload.displayName; 
            state.photoURL = payload.photoURL; 
            state.errorMessage = null;
        } ,         
        logout: ( state, { payload } ) => {
            state.status = 'not-authenticated' //checking
            state.uid = null;
            state.email = null;
            state.displayName = null;    
            state.photoURL = null;
            state.errorMessage = payload?.errorMessage
        },
        checkingCredentials: (state ) => {
            state.status = 'checking';
        },                  
    }
}) ;
// Action creators are generated for each case redu
export const { login, logout, checkingCredentials } = authSlice.actions;



// import { createSlice } from '@reduxjs/toolkit';

// export const authSlice = createSlice ({
//     name: 'auth',
//     initialState: {
//         counter: 10
//     },
//     reducers: {
//         increment: (state, /* action */ ) => {
//         state. counter += 1;
//         }  
//     }
// }) ;
// // Action creators are generated for each case redu
// export const { increment } = authSlice.actions;