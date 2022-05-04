import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import reduxThunk from "redux-thunk";

import App from "./App";
import reducers from "./reducers";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const composeEnchancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //Redux DevTools
const store = createStore(
  reducers,
  composeEnchancers(applyMiddleware(reduxThunk))
); //Middleware/Thunk

root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
