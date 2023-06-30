import * as React from 'react';
import { Box, Container, Grid, Button, TextField } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import retrieveBusinessListings from '../utils/yelpApi';

function SearchBar({ onSearch }){
  const [search, setSearch] = React.useState("");
  const [location, setLocation] = React.useState("");
  const [sort, setSort] = React.useState(0);

  const SORT = ["best_match", "rating", "review_count"]

  const handleSortClick = (sortIndex) => setSort(sortIndex)
  const handleSearchChange = (e) => setSearch(e.target.value)
  const handleLocationChange = (e) => setLocation(e.target.value)

  async function handleSubmitClick(e){
    // console.log("Searching Yelp with " + search + ", " + location + ", " + SORT[sort])
    const businesses = await retrieveBusinessListings(search, location, SORT[sort])
    onSearch(businesses)
  }

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Box sx={{
          backgroundImage: "linear-gradient( rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8) ), url('/banner.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: {xs: 'auto 100%', md: "100%"},
          backgroundColor: 'black',
          p: '10px'
        }}>
        <Container maxWidth="lg" >
          <Grid container spacing={1} >
            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
              <Grid container spacing={1} width={500}>
                <Grid item xs={12} sm={4}>
                  <Button fullWidth variant={sort==0 ? "outlined" : "text"}
                          onClick={() => handleSortClick(0)}>Best Match</Button>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Button fullWidth variant={sort==1 ? "outlined" : "text"}
                          onClick={() => handleSortClick(1)}>Highest Rated</Button>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Button fullWidth variant={sort==2 ? "outlined" : "text"}
                          onClick={() => handleSortClick(2)}>Most Reviewed</Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField id="search_businesses" label="Search Businesses" variant="filled" fullWidth
                         value={search} onChange={handleSearchChange} />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField id="where" label="Where?" variant="outlined" variant="filled" fullWidth
                         value={location} onChange={handleLocationChange} />
            </Grid>
            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
              <Button variant="contained" sx={{ minWidth:{xs:'100%', sm:'300px'} }}
                          onClick={handleSubmitClick} >Lets Go!</Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  )
}

export default SearchBar;