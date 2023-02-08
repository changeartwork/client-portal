import { Grid, styled } from '@mui/material';
import { Fragment } from 'react';
import InfoCard from './shared/InfoCard';
import QuoteFormWithDetails from './shared/QuoteFormWithDetails';

const ContentBox = styled('div')(({ theme }) => ({
    margin: '30px',
    [theme.breakpoints.down('sm')]: { margin: '16px' },
}));

const CreateQuote = () => {

    return (
        <Fragment>
            <ContentBox className="analytics">
                <Grid container spacing={3}>
                    <Grid item lg={8} md={8} sm={12} xs={12}>
                        <QuoteFormWithDetails />
                    </Grid>
                    <Grid item lg={4} md={4} sm={12} xs={12}>
                        <InfoCard />
                    </Grid>
                </Grid>
            </ContentBox>
        </Fragment>
    );
};

export default CreateQuote;
