import { Button, Grid, Modal, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  height: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 2,
  paddingTop: '2rem'
};
const SearchModal = ({ open, handleClose }) => {
  const navigate = useNavigate();
  const [companyName, setCompanyName] = useState('');
  const [error, setError] = useState(false);

  const hndleSearch = () => {
    if (!companyName.length) {
      setError(true);
    } else {
      setError(false);
      navigate(`/companies/${companyName}`);
    }
  };
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Grid
          container
          direction="column"
          justifyContent="space-between"
          alignItems="center"
          sx={{ height: '100%' }}
        >
          <Grid container>
            <Typography
              variant="h4"
              color="primary"
              component="div"
              sx={{ marginBottom: '4rem' }}
            >
              Get company information
            </Typography>
            <Typography
              color="tertiary"
              component="p"
              gutterBottom
              sx={{
                fontWeight: 100,
                fontSize: '.9rem',
                // padding: '0 3rem',
                textAlign: 'center',
                marginBottom: '2rem'
              }}
            >
              please enter the name of the company you are searching for
            </Typography>

            <TextField
              id="outlined-basic"
              label="Company Name"
              variant="outlined"
              fullWidth
              onChange={(e) => {
                setError(false);
                setCompanyName(e.target.value);
              }}
            />
          </Grid>
          {error && (
            <Typography
              variant="body1"
              color="primary"
              component="p"
              gutterBottom
            >
              Please enter a valid company name
            </Typography>
          )}

          <Grid
            container
            direction="row"
            justifyContent="space-around"
            alignItems="center"
          >
            <Button
              variant="outlined"
              sx={{ width: '8rem' }}
              onClick={handleClose}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              sx={{ width: '8rem' }}
              onClick={hndleSearch}
            >
              Search
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );
};

export default SearchModal;
