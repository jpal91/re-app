import "./styles.css";

import Cards from "./components/Cards";
import { Button } from "@mui/material";
import { connect } from "react-redux";
import { getHomes } from "./actions";
import { Outlet } from 'react-router-dom'
import CardHolder from "./components/CardHolder";
import GlobalNav from "./components/GlobalNav";
import React from "react";

const App = (props) => {
  return (
    <React.Fragment>
      <GlobalNav />
      <Outlet />  
    </React.Fragment>
  );
}

export default connect(null, { getHomes })(App)


//<Button variant='contained' onClick={() => props.getHomes()}>Button</Button>