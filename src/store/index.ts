import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from '@react-native-async-storage/async-storage'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

import { rootReducer } from './rootReducer'

const persistConfig = {
  key: 'root',
  storage,
  blacklist: [
    'vaccinesReducer',
    'calendarsReducer'
  ],
  whitelist: []
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const middleware = []

if (__DEV__) {
  const createDebugger = require('redux-flipper').default
  middleware.push(createDebugger())
}

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export * from './slices'
