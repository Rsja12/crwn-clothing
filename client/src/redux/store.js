import { createStore, applyMiddleware } from 'redux'
import { persistStore } from 'redux-persist'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import rootReducer from './root-reducer'

const middlewares = [thunk]

if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger)
}

// spread in all values from middlewares as individual arguments to applyMiddleware()
export const store = createStore(rootReducer, applyMiddleware(...middlewares))
export const persistor = persistStore(store)

export default {store, persistor}