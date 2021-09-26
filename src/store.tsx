import { configureStore } from '@reduxjs/toolkit'
import { createLogger } from 'redux-logger';

import historyReducer from './ducks/historyReducer'

const store = configureStore({
  reducer: {
    history: historyReducer,
  },
  middleware: [
    createLogger(),
  ]
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store