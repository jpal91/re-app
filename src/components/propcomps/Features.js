import React, { useEffect } from "react";

import { Grid, Typography } from "@mui/material";

const Features = (props) => {
    
    const render = () => {
        return props.deets.map((deet) => {
            return (
                <Grid item key={deet.category} xs={3}>
                    <Typography variant='h6'>{deet.category}</Typography>
                    {deet.text.map((t) => {
                       return <Typography variant='body2' key={t}>{t}</Typography>
                    })}
                </Grid>
            )
        })
    }

    useEffect(() => {
        if (props.deets.length === 0) {
            return
        }

        render()

    }, [props])

    return (
        <React.Fragment>
            {render()}
        </React.Fragment>
    )
}

export default Features