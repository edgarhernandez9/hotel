import { configureStore } from '@reduxjs/toolkit';
import { crearLandig } from './reducer';
import { combineReducers } from '@reduxjs/toolkit';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';


const persistConfig = {
    key: 'idioma',
    storage,
    whitelist: ['datos']
}

const roootReducer = combineReducers({
    datos: crearLandig.reducer
});

const persisterReducer = persistReducer(persistConfig, roootReducer);


const store = configureStore({
    reducer: persisterReducer,
    middleware: [thunk]
});

export default store;