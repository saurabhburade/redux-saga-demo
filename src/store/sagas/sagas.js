import { takeEvery, call, put } from "redux-saga/effects";
import { fetchDataService } from "../../services/service";
function* handleFetchData() {
  try {
    const users = yield call(fetchDataService);
    yield put({ type: "FETCH_DATA_SUCCESS", payload: { data: users } });
  } catch (error) {
    console.log({ error });
  }
}

export  function* watchForFetchData() {
  yield takeEvery("FETCH_DATA_INIT", handleFetchData);
}
