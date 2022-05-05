import React, { useEffect } from "react";
import { connect } from "react-redux";
import CardHolder from "./CardHolder";
import { Grid } from "@mui/material";

import { getHomes } from "../actions";
import Cards from './Cards'

const Under2 = (props) => {
    const getCards = () => {
        if (props.under.length === 0) {
            return
        }

        return props.under.map((home) => {
            let date = new Date(home.listed)
            let month = date.getMonth()
            let day = date.getDay()
            
            return (
                <Grid item key={home.prop_id}>
                    <Cards 
                        add={`${home.strt}, ${home.city}, ${home.state} ${home.zip}`}
                        lp={home.l_price}
                        pic={home.pic}
                        beds={home.beds}
                        baths={home.baths}
                        sqft={home.sqft}
                        ld={`${month + 1 }/${day + 1}`}
                        
                    />
                </Grid>
            )
        })
    }

    useEffect(() => {
        props.getHomes('under')
    }, [])

    return (
        <CardHolder 
            getCards={getCards()}
        />
    )
}

const mapStateToProps = (state) => {
    return {
        under: state.under
    }
}

export default connect(mapStateToProps, { getHomes })(Under2)