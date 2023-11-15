const NewsReducer = (state, action) => {
  if (action.type === "NEWS") {
    return { state, allnews: action.payload };
  } else {
    return state;
  }
};

export default NewsReducer;
