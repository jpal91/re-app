import React from "react";

import Card from "@mui/material/Card";
import {
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  Typography
} from "@mui/material";

const Cards = () => {
  return (
    <div>
      <Card sx={{ maxWidth: 400 }}>
        <CardHeader title="Test" subheader="subtest" />
        <CardMedia
          component="img"
          height="200"
          width="300"
          src="src/media/photo.jpg"
        />
        <CardContent>
          <Grid container spacing={2}>
            <Grid
              item
              xs={7}
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
                  345000
                </Typography>
              </Typography>
              <Typography variant="h6">
                EV:
                <Typography component="span" variant="h6" color="success.light">
                  {" "}
                  345000
                </Typography>
              </Typography>
            </Grid>
            <Grid container item xs={5}>
              <Grid
                item
                xs={8}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start"
                }}
              >
                <Typography variant="body1">Beds</Typography>
                <Typography variant="body1">Baths</Typography>
                <Typography variant="body1">Sqft</Typography>
                <Typography variant="body1">Listed Date</Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="body1">4</Typography>
                <Typography variant="body1">2</Typography>
                <Typography variant="body1">2000</Typography>
                <Typography variant="body1">4/28</Typography>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
};

export default Cards;
