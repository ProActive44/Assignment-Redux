let initialState = {
  likeCount: 0,
};

export const reducer = (state = initialState, action) => {
  const { type } = action;

  switch (type) {
    case "INCREMENT":
      return {
        ...state,
        likeCount: state.likeCount + 1,
      };

    case "DECREMENT":
      return {
        ...state,
        likeCount: state.likeCount - 1,
      };

    default:
      return state;
  }
};
