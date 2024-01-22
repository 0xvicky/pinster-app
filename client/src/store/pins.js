const initialState = {
  pins: []
};

export default (state = initialState, action) => {
  switch (action.value) {
    case "GET_PINS":
      return (state.pins = action.payload);
    case "ADD_PIN":
      return [...state.pins, action.payload];
    default:
      return state;
  }
};
