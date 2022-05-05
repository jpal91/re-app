import { Grid } from "@mui/material";
import React from "react";
import { connect } from "react-redux";

import { getHomes } from "../actions";

const CardHolder = (props) => {
    
    
    return (
        <Grid container spacing={2} sx={{ display: 'flex' }}>
            {props.getCards}
        </Grid>
    )
}

const mapStateToProps = (state) => {
    return {
        homes: state.homes
    }
}

export default connect(mapStateToProps, { getHomes })(CardHolder)