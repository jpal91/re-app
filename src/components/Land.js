import React, { useEffect } from "react";
import { connect } from "react-redux";
import CardHolder from "./CardHolder";
import { Grid } from "@mui/material";

import { getHomes } from "../actions";
import Cards from "./Cards";

const Land = (props) => {
  const getCards = () => {
    if (props.land.length === 0) {
      return;
    }

    let list = props.land.sort(
      (a, b) => new Date(b.temp.listed) - new Date(a.temp.listed)
    );

    return list.map((home) => {
      let date = new Date(home.temp.listed);
      let month = date.getMonth();
      let day = date.getDate();

      return (
        <Grid item key={home.temp.prop_id}>
          <Cards
            add={
              `${home.temp.strt}, ${home.temp.city}, ${home.temp.state} ${home.temp.zip}` ||
              null
            }
            lp={home.temp.l_price}
            pic={home.temp.pic || null}
            sqft={home.temp.lot_sf}
            ld={`${month + 1}/${day}`}
            link={`/prop/${parseInt(home.temp.prop_id)}`}
          />
        </Grid>
      );
    });
  };

  useEffect(() => {
    props.getHomes("land");
  }, []);

  return <CardHolder getCards={getCards()} />;
};

const mapStateToProps = (state) => {
  return {
    land: state.land
  };
};

export default connect(mapStateToProps, { getHomes })(Land);
