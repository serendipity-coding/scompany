import React, { useState } from 'react';
import apis from '../../api/index';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, CircularProgress, Grid, Typography } from '@mui/material';
import CompanyCard from './CompanyCard';

const Company = () => {
  const navigate = useNavigate();
  const { companyName } = useParams();
  const [company, setCompany] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [noCompanyError, setNoCompanyError] = useState(false);
  /**
   * It's an async function that calls an API, and then sets the state of the company variable to the
   * response of the API.
   * @param companyName - "Google"
   */
  const getCompanyLinkedIn = async (companyName) => {
    await apis
      .getCompanyLinkedIn(companyName)
      .then((res) => {
        setIsPending(false);
        setCompany(res.data.company);
      })
      .catch((error) => {
        setIsPending(false);
        setNoCompanyError(true);
        console.error(error);
        console.error(error.response);
      });
  };
  useEffect(() => {
    if (companyName) {
      getCompanyLinkedIn(companyName);
    }
  }, [companyName]);
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{ height: '80vh' }}
    >
      {!isPending ? (
        <>
          {company && (
            <Grid>
              <Typography
                variant="h4"
                color="primary"
                component="div"
                sx={{ marginBottom: '4rem' }}
              >
                Results for "{companyName}"
              </Typography>
              <CompanyCard company={company} companyName={companyName} />
              <Button
                variant="contained"
                onClick={() => {
                  navigate(`/`);
                }}
                sx={{ marginTop: '2rem' }}
              >
                Get back
              </Button>
            </Grid>
          )}

          {noCompanyError && !company && (
            <>
              <Typography
                variant="h4"
                color="primary"
                component="div"
                sx={{ marginBottom: '4rem' }}
              >
                No results were found for "{companyName}", please try again
              </Typography>
              <Button
                variant="contained"
                onClick={() => {
                  navigate(`/`);
                }}
                sx={{ marginTop: '2rem' }}
              >
                Get back
              </Button>
            </>
          )}
        </>
      ) : (
        <CircularProgress />
      )}
    </Grid>
  );
};

export default Company;
