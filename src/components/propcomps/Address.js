import React, { useEffect } from "react";

import { Grid, Typography } from "@mui/material";

const Address = (props) => {
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

    return (
        <React.Fragment>
            {render()}
        </React.Fragment>
    )
}

export default Address