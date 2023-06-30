import {Box, Typography} from '@mui/material';

function TitleBar({ text }){

  return (<Box sx={{ display: 'flex', justifyContent: 'center', backgroundColor: 'primary.dark', color: 'white' }}>
    <Typography variant="h4">{text}</Typography>
  </Box>);
}

export default TitleBar;