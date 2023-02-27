import { Grid, styled } from '@mui/material';
import { Fragment } from 'react';
 import PlaceQuoteCard from './shared/PlaceQuoteCard';
import QuoteListCard from './shared/QuoteListCard';

const ContentBox = styled('div')(({ theme }) => ({
  margin: '30px',
  [theme.breakpoints.down('sm')]: { margin: '16px' },
}));

const ListQuotes = () => {

  return (
    <Fragment>
      <ContentBox className="analytics">
        <Grid container spacing={3}>
          <Grid item lg={8} md={8} sm={12} xs={12}>
            <QuoteListCard />
          </Grid>

          <Grid item lg={4} md={4} sm={12} xs={12}>
            <PlaceQuoteCard />
          </Grid>
        </Grid>
      </ContentBox>
    </Fragment>
  );
};

export default ListQuotes;
