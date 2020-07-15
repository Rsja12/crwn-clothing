import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'

import rootReducer from './root-reducer'

const middlewares = [logger]
// spread in all values from middlewares as individual arguments to applyMiddleware()
const store = createStore(rootReducer, applyMiddleware(...middlewares))

export default store