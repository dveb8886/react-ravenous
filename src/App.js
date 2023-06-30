import BusinessList from './components/BusinessList';
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import SearchBar from "./components/SearchBar";
import TitleBar from "./components/TitleBar";
// import { response } from './mock/yelpResponse';

function App() {
  const [businesses, setBusinesses] = React.useState([])

  function handleSearch(businesses){
    setBusinesses(businesses)
  }

  return (
    <div className="App">
      <CssBaseline />
      <TitleBar text="Ravenous" />
      <SearchBar onSearch={handleSearch} />
      <Container maxWidth="lg">
          <BusinessList businesses={businesses} />
      </Container>
    </div>
  );
}

export default App;
