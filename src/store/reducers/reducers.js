const initialState = {
    data: [],
    error:""

}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "FETCH_DATA_INIT":
      return { ...state, ...payload };

    case "FETCH_DATA_SUCCESS":
      return { ...state, ...payload };

    case "FETCH_DATA_FAIL":
      return { ...state, ...payload };

    default:
      return state;
  }
}
