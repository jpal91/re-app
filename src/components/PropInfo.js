import { Container, Grid } from "@mui/material";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams, useLocation } from 'react-router-dom'

import { getProp } from "../actions";
import Pics from "./propcomps/Pics";
import Features from "./propcomps/Features";
import Address from "./propcomps/Address";
import FeaturesPt2 from "./propcomps/FeaturesPt2";

const PropInfo = (props) => {
    const params = useParams()
    const location = useLocation()
    
    useEffect(() => {
        props.getProp(params.id)
    }, [])

    const render = () => {
        if (Object.keys(props.deets).length === 0 || props.last !== location.pathname) {
            return (
                <div>Loading...</div>
            )
        }

        return (
            <React.Fragment>
                <Container fixed sx={{width: 1200, maxHeight: 400}}>
                    <Pics 
                        photos={props.deets.photos}
                    /> 
                </Container>
                <br/>
                <Grid container my={2}>
                    <Grid container item sx={{display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', borderBottom: 1, p: 3, mx: 3}} spacing={2}>
                        <Address address={props.deets.address} common={props.deets.prop_common}/>
                    </Grid>
                    <hr/>
                    <Grid container item spacing={2} sx={{display: 'flex', justifyContent: 'center', mx: 3, mb: 4}}>  
                        <   Features deets={props.deets.features || []} />
                    </Grid>
                    <Grid container item spacing={2} sx={{display: 'flex', justifyContent: 'center', mx: 3, mb: 2}}>
                        <FeaturesPt2 deets={props.deets.prop_common} /> 
                    </Grid>
                </Grid>
            </React.Fragment>
        )
    }

    useEffect(() => {
        render()
    }, [props])

    return (
        <React.Fragment>
            {render()}
        </React.Fragment>
    )
}

const mapStateToProps = (state) => {
    return {
        deets: state.deets,
        last: state.last
    }
}

export default connect(mapStateToProps, { getProp })(PropInfo)

//<FeaturesPt2 deets={props.deets.prop_common} /> 