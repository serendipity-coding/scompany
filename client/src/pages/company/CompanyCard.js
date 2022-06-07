import { Avatar, Grid, Typography, Link } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import PeopleIcon from '@mui/icons-material/People';
import InsertLinkIcon from '@mui/icons-material/InsertLink';

const CompanyCard = ({ company, companyName }) => {
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <Grid
      container
      sx={{
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        borderRadius: '8px',
        padding: '1rem'
      }}
    >
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
      >
        <Avatar
          src={company.logo}
          sx={{ width: '4rem', height: '4rem', marginRight: '1rem' }}
        />
        <Typography variant="h5" color="secondary" component="div" gutterBottom>
          {capitalizeFirstLetter(companyName)}
        </Typography>
      </Grid>
      <Grid container direction="column" sx={{ marginTop: '1rem' }}>
        <Grid container direction="row">
          <WorkIcon color="primary" />

          <Typography
            variant="subtitle1"
            color="secondary"
            component="div"
            gutterBottom
            sx={{ marginLeft: '.5rem' }}
          >
            {company.field}
          </Typography>
        </Grid>

        <Grid container direction="row">
          <ConnectWithoutContactIcon color="primary" />
          <Typography
            variant="subtitle1"
            color="secondary"
            component="div"
            gutterBottom
            sx={{ marginLeft: '.5rem' }}
          >
            {company.subscribers} linkedIn
          </Typography>
        </Grid>
        <Grid container direction="row">
          <PeopleIcon color="primary" />
          <Typography
            variant="subtitle1"
            color="secondary"
            component="div"
            gutterBottom
            sx={{ marginLeft: '.5rem' }}
          >
            {company.numberOfEmployees}
          </Typography>
        </Grid>
        <Grid container direction="row">
          <InsertLinkIcon color="primary" />

          <Link
            href={company.websiteLink}
            underline="none"
            sx={{
              color: 'white',
              '&:hover': { color: '#FA7041' },
              marginLeft: '.7rem'
            }}
            target="_blank"
            rel="noreferrer"
          >
            Officiel Website
          </Link>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CompanyCard;
