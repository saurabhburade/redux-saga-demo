import { applyMiddleware, createStore } from "redux"
import reducer from "./reducers/reducers"
import createSagaMiddleware from "@redux-saga/core";
import logger from "redux-logger";
import { all } from "redux-saga/effects";
import { watchForFetchData } from "./sagas/sagas";

function* rootSaga() {
    yield all([watchForFetchData()])
}
const sagaMiddleWare = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(logger, sagaMiddleWare));
sagaMiddleWare.run(rootSaga);
 export default store