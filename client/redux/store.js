import {combineReducers, configureStore} from "@reduxjs/toolkit";
import userReducer from "./user/userSlice.js";
import bookingReducer from "./booking/bookingSlice.js"

import storage from "redux-persist/lib/storage"
import {persistReducer} from "redux-persist";
import persistStore from "redux-persist/es/persistStore";

const rootReducer = combineReducers({user:userReducer, booking:bookingReducer})

const persistConfig = {
    key: 'root',
    storage,
    version: 1,
}

const persistedReducer =  persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }),
    
});

export const persistor = persistStore(store);