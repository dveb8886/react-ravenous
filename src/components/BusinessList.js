import Business from './Business.js'
import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

function BusinessList({businesses}) {
  const cards = []

  for (let business of businesses){
    cards.push(<Business key={business.id}
      img={business.image_url} name={business.name}
      address={business.location.address1} city={business.location.city}
      state={business.location.state} zipcode={business.location.zip_code}
      category={business.categories[0].title} rating={business.rating}
      review_count={business.review_count}
    />)
  }

  return (
    <Box sx={{ m: 2 }}>
      <Grid container spacing={1}>
        { cards }
      </Grid>
    </Box>
  );
}

export default BusinessList;
