import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'

import { Button, Grid, Typography } from "@mui/material";
import { connect } from "react-redux";

import { getAVM } from "../../actions";

const Address = (props) => {
    const [hide, setHide] = useState(false)
    const param = useParams()
    
    const handleClick = () => {
        setHide(true)
        props.getAVM(param.id)
    }

    const renderAVM = () => {
        let truthy = Object.keys(props.avm).length > 0 ? true : false

        if (truthy) {
            return (
                <React.Fragment>
                    <Typography variant='h6'>Corelogic: ${props.avm.corelogic ? props.avm.corelogic.toLocaleString() : null}</Typography>
                    <Typography variant='h6'>Quantarium: ${props.avm.quantarium ? props.avm.quantarium.toLocaleString() : null}</Typography>
                    <Typography variant='h6'>Collateral: ${props.avm.collateral ? props.avm.collateral.toLocaleString() : null}</Typography>
                </React.Fragment>
            )
        } else if (!truthy && hide) {
            
            return (
                <React.Fragment>
                    <Typography variant='h6' >Loading...</Typography>
                </React.Fragment>
            )
        } else if (!truthy && !hide) {
            return (
                <React.Fragment>
                    <Button variant='outlined' onClick={() => handleClick()} >Hello</Button>
                </React.Fragment>
            )
        }
    }
    
    const render = () => {
        let options = { dateStyle: 'short', timeStyle: 'short'}
        let date = new Date(props.common.list_date)
        return (
            <React.Fragment>
                <Grid item>
                    <Typography variant='h3' sx={{color: 'cornflowerblue'}} >{props.address.line}</Typography>
                    <Typography variant='h6'>{`${props.address.city}, ${props.address.state_code} ${props.address.postal_code}`}</Typography>
                </Grid>
                <Grid item>
                    <Typography variant='h5'>{`Listing Price: $${props.common.price.toLocaleString()}`}</Typography>
                    <Typography variant='h5'>{`Listed: ${date.toLocaleString('en-US', options)}`}</Typography>
                </Grid>
            </React.Fragment>
        )
    }

    useEffect(() => {
        if (Object.keys(props.address).length === 0) {
            return
        } else {
            render()
        }
    })

    useEffect(() => {
        renderAVM()
    }, [props.avm])

    return (
        <React.Fragment>
            {render()}
            <Grid item>
                {renderAVM()}
               
            </Grid>
        </React.Fragment>
    )
}

export default connect(null, { getAVM })(Address)