import { configureStore, MiddlewareArray } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

// @ts-ignore
import logger from 'redux-logger';

// reducers
import rootReducer from './rootReducer';

// rootSagas
import rootSaga from './rootSaga';

// redux-persist
const sagaMiddleware : any = createSagaMiddleware()

const middleware = new MiddlewareArray().concat(sagaMiddleware, logger);

export const store = configureStore({
  reducer: rootReducer,
  middleware
});

// run saga
sagaMiddleware.run(rootSaga)

// redux-persist

export let persistor = persistStore(store)


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

// export type AppThunk<ReturnType = void> = ThunkAction<
//   ReturnType,
//   RootState,
//   unknown,
//   Action<string>
// >;
