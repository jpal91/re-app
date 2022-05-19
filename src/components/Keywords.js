import React, { useEffect } from "react";
import { connect } from "react-redux";
import CardHolder from "./CardHolder";
import { Grid } from "@mui/material";

import { getHomes } from "../actions";
import Cards from "./Cards";

const Keywords = (props) => {
  const getCards = () => {
    if (props.keywords.length === 0) {
      return;
    }

    let list = props.keywords.sort((a, b) => b.temp.listed - a.temp.listed);

    return props.keywords.map((home) => {
      let date = new Date(home.temp.listed);
      let month = date.getMonth();
      let day = date.getDate();
      
      let avm =
        home.avm.corelogic || home.avm.quantarium || home.avm.collateral;
      let kw = home.int.keywords.map((k) => {
        let newK = k.split("_").join(" ");
        return `${newK[0].toUpperCase()}${newK.slice(1)} `;
      });
      return (
        <Grid item key={home.temp.prop_id}>
          <Cards
            add={`${home.temp.strt}, ${home.temp.city}, ${home.temp.state} ${home.temp.zip}`}
            lp={home.temp.l_price}
            pic={home.temp.pic}
            beds={home.temp.beds}
            baths={home.temp.baths}
            sqft={home.temp.sqft}
            keyword={kw}
            ld={`${month + 1}/${day + 1}`}
            ev={avm}
            link={`/prop/${parseInt(home.temp.prop_id)}`}
          />
        </Grid>
      );
    });
  };

  useEffect(() => {
    props.getHomes("keywords");
  }, []);

  return <CardHolder getCards={getCards()} />;
};

const mapStateToProps = (state) => {
  return {
    keywords: state.keywords
  };
};

export default connect(mapStateToProps, { getHomes })(Keywords);
