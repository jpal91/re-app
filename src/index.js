import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import reduxThunk from "redux-thunk";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import App from "./App";
import reducers from "./reducers";
import Interesting from "./components/Interesting";
import Land from "./components/Land";
import Under2 from "./components/Under2";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const composeEnchancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //Redux DevTools
const store = createStore(
  reducers,
  composeEnchancers(applyMiddleware(reduxThunk))
); //Middleware/Thunk

root.render(
  
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />} >
            <Route path='/land' element={<Land />} />
            <Route path='/under' element={<Under2 />} />
            <Route index element={<Interesting />} />
          </Route>
        </Routes>
      </BrowserRouter>
        
    </Provider>
  
);
