import { Avatar, Button, Grid, Typography, useMediaQuery } from '@mui/material';
import React from 'react';
import heroImage from '../assets/heroImage.png';
import SearchModal from '../pages/search/SearchModal';

const HeroSection = () => {
  const isMobile = useMediaQuery('(max-width: 500px)');
  // search modal
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{ marginTop: '4rem', padding: '2rem 4rem' }}
    >
      <Grid
        item
        xs={isMobile ? 12 : 7}
        container
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <Typography variant="h2" color="primary" component="div">
          On demand web scraping
        </Typography>
        <Typography variant="h3" color="secondary" component="div" gutterBottom>
          for your business
        </Typography>

        <Button variant="contained" onClick={handleOpen}>
          Start scrapping
        </Button>
        <SearchModal open={open} handleClose={handleClose} />
      </Grid>
      {!isMobile && (
        <Grid item xs={5}>
          <Avatar
            src={heroImage}
            variant="square"
            sx={{ width: '400px', height: '300px' }}
          />
        </Grid>
      )}
    </Grid>
  );
};

export default HeroSection;
