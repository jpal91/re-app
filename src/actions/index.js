const api = require("./api");

export const getHomes = () => async (dispatch) => {
  const response = api.get("/v2/for-sale", {
    params: {
      offset: "0",
      limit: "10",
      state_code: "NC",
      city: "Charlotte",
      sort: "newest",
      hide_pending_contingent: "true",
      new_construction: "false"
    }
  });
};
