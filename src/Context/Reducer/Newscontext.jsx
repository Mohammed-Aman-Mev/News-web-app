import { createContext, useReducer } from "react";
import NewsReducer from "./NewsReducer";

const NewsContext = createContext();

export const NewsProvider = ({ children }) => {
  const Intialstate = {
    allnews: [],
    bitcoin:[],
  };

  const [state, NewsDispatch] = useReducer(NewsReducer, Intialstate);

  return (
    <NewsContext.Provider value={{ ...state, NewsDispatch }}>
      {children}
    </NewsContext.Provider>
  );
};

export default NewsContext;
