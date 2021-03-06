import React from "react";

import Card from "@mui/material/Card";
import {
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  Typography
} from "@mui/material";
import { connect } from "react-redux";
import { Link } from 'react-router-dom'

import PopperSimp from "./tools/PopperSimp";

const Cards = (props) => {
  return (
    <div>
      <Card sx={{ maxWidth: 400, minWidth: 400, height: 410 }}>
        <CardHeader title={props.add}  />
        <Link to={props.link ? props.link : null} >
          <CardMedia
            component="img"
            height="200"
            width="300"
            src={props.pic ? props.pic : null}
          />
        </Link>
        <CardContent>
          <Grid container spacing={2}>
            <Grid
              item
              xs={6}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start"
              }}
            >
              <Typography variant="h6">
                List Price:
                <Typography component="span" variant="h6" color="primary.light">
                  {" "}
                  {props.lp.toLocaleString()}
                </Typography>
              </Typography>
              <Typography variant="h6">
                {props.ev ? 'EV:' : ''}
                <Typography component="span" variant="h6" color="success.light">
                  {" "}
                  {props.ev ? props.ev.toLocaleString() : ''}
                </Typography>
              </Typography>
              {props.keyword ? <PopperSimp id='popper1' kw={props.keyword}/> : ''}
            </Grid>
            <Grid container item xs={6}>
              <Grid
                item
                xs={8}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start"
                }}
              >
                <Typography variant="body1">{props.beds ? 'Beds' : ''}</Typography>
                <Typography variant="body1">{props.baths ? 'Baths' : ''}</Typography>
                <Typography variant="body1">{props.sqft ? 'Sqft' : ''}</Typography>
                <Typography variant="body1">{props.ld ? 'Listed Date' : ''}</Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="body1">{props.beds || ''}</Typography>
                <Typography variant="body1">{props.baths || ''}</Typography>
                <Typography variant="body1">{props.sqft ? props.sqft.toLocaleString() : ''}</Typography>
                <Typography variant="body1">{props.ld}</Typography>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    homes: state.homes
  }
}

export default connect(mapStateToProps)(Cards);
