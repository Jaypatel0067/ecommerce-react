import {applyMiddleware} from 'redux'
import logger from 'redux-logger'
import RootReduser from './Root-reduser'
import { configureStore } from '@reduxjs/toolkit'

const middlewares = [logger];
const Store = configureStore(RootReduser,applyMiddleware(...middlewares))

export default Store;