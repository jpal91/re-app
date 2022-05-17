import { Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams, useLocation } from 'react-router-dom'

import { getProp, setLast } from "../actions";
import Pics from "./propcomps/Pics";
import Features from "./propcomps/Features";
import Address from "./propcomps/Address";
import FeaturesPt2 from "./propcomps/FeaturesPt2";

const PropInfo = (props) => {
    const params = useParams()
    const location = useLocation()

    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        
        if (Object.keys(props.deets).length === 0 || props.last !== location.pathname) {
            setLoading(true)
            props.getProp(params.id)
            props.setLast(location.pathname)
        } else {
            setLoading(false)
        }
    }, [props.deets])


    const render = () => {
        if (loading) {
            return
        }
        return (
            <React.Fragment>
                <Container fixed sx={{width: 1200, maxHeight: 400}}>
                    <Pics 
                        photos={props.deets.full.photos}
                    /> 
                </Container>
                <br/>
                <Grid container my={2}>
                    <Grid container item sx={{display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', borderBottom: 1, p: 3, mx: 3}} spacing={2}>
                        <Address address={props.deets.full.address} common={props.deets.full.prop_common} avm={props.deets.avm || {}}/>
                    </Grid>
                    <hr/>
                    <Grid container item spacing={2} sx={{display: 'flex', justifyContent: 'center', mx: 3, mb: 4}}>  
                        <   Features deets={props.deets.full.features || []} />
                    </Grid>
                    <Grid container item spacing={2} sx={{display: 'flex', justifyContent: 'center', mx: 3, mb: 2}}>
                        <FeaturesPt2 deets={props.deets.full.prop_common} /> 
                    </Grid>
                </Grid>
            </React.Fragment>
        )
    }

    const renderLoad = () => {
        if (!loading) {
            return
        }

        return (
            <div>Loading...</div>
        )
    }

    return (
        <React.Fragment>
            {render()}
            {renderLoad()}
        </React.Fragment>
    )
}

const mapStateToProps = (state) => {
    return {
        deets: state.deets,
        last: state.last
    }
}

export default connect(mapStateToProps, { getProp, setLast })(PropInfo)

//<FeaturesPt2 deets={props.deets.prop_common} /> 