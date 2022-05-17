import React, { useEffect } from "react";
import { connect } from "react-redux";
import CardHolder from "./CardHolder";
import { Grid } from "@mui/material";

import { getHomes } from "../actions";
import Cards from "./Cards";

const Under2 = (props) => {
  const getCards = () => {
    if (props.under.length === 0) {
      return;
    }

    let list = props.under.sort(
      (a, b) => new Date(b.temp.listed) - new Date(a.temp.listed)
    );

    return list.map((home) => {
      let date = new Date(home.temp.listed);
      let month = date.getMonth();
      let day = date.getDate();

      return (
        <Grid item key={home.temp.prop_id}>
          <Cards
            add={`${home.temp.strt}, ${home.temp.city}, ${home.temp.state} ${home.temp.zip}`}
            lp={home.temp.l_price}
            pic={home.temp.pic}
            beds={home.temp.beds}
            baths={home.temp.baths}
            sqft={home.temp.sqft}
            ld={`${month + 1}/${day}`}
            link={`/prop/${parseInt(home.temp.prop_id)}`}
          />
        </Grid>
      );
    });
  };

  useEffect(() => {
    props.getHomes("under");
  }, []);

  return <CardHolder getCards={getCards()} />;
};

const mapStateToProps = (state) => {
  return {
    under: state.under
  };
};

export default connect(mapStateToProps, { getHomes })(Under2);
