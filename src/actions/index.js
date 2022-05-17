import React from "react";
import lh from "./lh";

const auth = { auth: "Test123" };

export const getHomes = (str) => async (dispatch) => {
  let response;

  if (str === "int") {
    response = await lh.post("/ui/listings", auth);
    return dispatch({ type: "GET_HOMES", payload: response.data });
  } else if (str === "land") {
    response = await lh.post("/ui/land", auth);
    return dispatch({ type: "GET_LAND", payload: response.data });
  } else if (str === "under") {
    response = await lh.post("/ui/under", auth);
    return dispatch({ type: "GET_UNDER", payload: response.data });
  } else if (str === "multi") {
    response = await lh.post("/ui/multi", auth);
    return dispatch({ type: "GET_MULTI", payload: response.data });
  } else if (str === "keywords") {
    response = await lh.post("/ui/keywords", auth);
    return dispatch({ type: "GET_KEYWORDS", payload: response.data });
  }

  return;
};

export const getProp = (num) => async (dispatch) => {
  const response = await lh.post("/mongo-api/prop-details", {
    ...auth,
    id: num
  });

  return dispatch({ type: "PROP_DETAILS", payload: response.data });
};

export const getAVM = (num) => async (dispatch) => {
  const response = await lh.post("/mongo-api/avm-details", {
    ...auth,
    id: num
  });

  return dispatch({ type: "PROP_DETAILS", payload: response.data });
};

export const setLast = (str) => {
  return { type: "LAST", payload: str };
};
