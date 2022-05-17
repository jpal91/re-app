import React, { useEffect } from "react";
import { connect } from "react-redux";
import CardHolder from "./CardHolder";
import { Grid } from "@mui/material";

import { getHomes } from "../actions";
import Cards from './Cards'

const Interesting = (props) => {
    const getCards = () => {
        if (props.homes.length === 0) {
            return
        }

        return props.homes.map((home) => {
            let date = new Date(home.temp.listed)
            let month = date.getMonth()
            let day = date.getDay()
            let avm = home.avm.corelogic || home.avm.quantarium || home.avm.collateral
            return (
                <Grid item key={home.temp.prop_id}>
                    <Cards 
                        add={`${home.temp.strt}, ${home.temp.city}, ${home.temp.state} ${home.temp.zip}`}
                        lp={home.temp.l_price}
                        pic={home.temp.pic}
                        beds={home.temp.beds}
                        baths={home.temp.baths}
                        sqft={home.temp.sqft}
                        ld={`${month + 1 }/${day + 1}`}
                        ev={avm}
                        link={`/prop/${parseInt(home.temp.prop_id)}`}
                    />
                </Grid>
            )
        })
    }

    useEffect(() => {
        props.getHomes('int')
    }, [])

    return (
        <CardHolder 
            getCards={getCards()}
        />
    )
}

const mapStateToProps = (state) => {
    return {
        homes: state.homes
    }
}

export default connect(mapStateToProps, { getHomes })(Interesting)