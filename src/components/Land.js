import React, { useEffect } from "react";
import { connect } from "react-redux";
import CardHolder from "./CardHolder";
import { Grid } from "@mui/material";

import { getHomes } from "../actions";
import Cards from './Cards'

const Land = (props) => {
    const getCards = () => {
        if (props.land.length === 0) {
            return
        }

        return props.land.map((home) => {
            let date = new Date(home.listed)
            let month = date.getMonth()
            let day = date.getDay()
            
            return (
                <Grid item key={home.prop_id}>
                    <Cards 
                        add={`${home.strt}, ${home.city}, ${home.state} ${home.zip}` || null}
                        lp={home.l_price}
                        pic={home.pic || null}
                        sqft={home.lot_sf}
                        ld={`${month + 1 }/${day + 1}`}
                    />
                </Grid>
            )
        })
    }

    useEffect(() => {
        props.getHomes('land')
    }, [])

    return (
        <CardHolder 
            getCards={getCards()}
        />
    )
}

const mapStateToProps = (state) => {
    return {
        land: state.land
    }
}

export default connect(mapStateToProps, { getHomes })(Land)