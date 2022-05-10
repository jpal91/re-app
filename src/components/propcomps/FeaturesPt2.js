import { Grid, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import React, { useEffect } from 'react'

const FeaturesPt2 = (props) => {
    
    const render = () => {
        let info = Object.entries(props.deets)
        
        return info.map((i) => {
            let split = i[0].split('_').join(' ')
            let newStr = `${split[0].toUpperCase()}${split.slice(1)}`
            
            return (
                <Grid item key={i[0]} xs={3}>
                    <Typography variant='body1' sx={{fontWeight: 'bold'}}>{`${newStr}: `}
                        <Typography variant='body1' component='span'>{`${i[1]}`}</Typography>
                    </Typography>
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
            <Typography variant='h5' sx={{my: 4}}>Description: {props.deets.description}</Typography>
            <Accordion>
                <AccordionSummary 
                    expandIcon={<ExpandMoreIcon />}
                >
                    <Typography>Expand Details</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    {render()}
                </AccordionDetails>
            </Accordion>
            
        </React.Fragment>
    )
}

export default FeaturesPt2