import * as React from 'react';
import { Card, CardContent, Typography, Grid, CardMedia, Stack } from '@mui/material';

function Business({ img, name, address, city, state, zipcode, category, rating, review_count }){
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card>
        <CardMedia
          component="img"
          height="194"
          image={img}
          alt="Image"
        />
        <CardContent>
          <Typography variant="h5" component="div">{name}</Typography>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Typography variant="body1" sx={{ fontSize: 12 }} component="div">{address}</Typography>
              <Typography variant="body1" sx={{ fontSize: 12 }} component="div">{city}</Typography>
              <Typography variant="body1" sx={{ fontSize: 12 }} component="div">{state} {zipcode}</Typography>
            </Grid>
            <Grid item xs={4}>
                <Typography variant="body1" sx={{ fontSize: 16 }} component="div" align="right">{category}</Typography>
                <Typography variant="body1" sx={{ fontSize: 14 }} align="right">{rating} Stars</Typography>
                <Typography variant="body1" sx={{ fontSize: 12 }} color="text.secondary" align="right">{review_count} reviews</Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
);
}

export default Business
