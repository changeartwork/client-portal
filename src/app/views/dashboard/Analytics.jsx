import { Grid, styled, useTheme } from "@mui/material";
import { Fragment } from "react";



import StatCards from "./shared/StatCards";
import OrdersQuery  from "./shared/OrdersQuery";
import ProgressCard from "./shared/ProgressCard";


const ContentBox = styled("div")(({ theme }) => ({
  margin: "30px",
 
  [theme.breakpoints.down("sm")]: { margin: "16px" },
}));





const H4 = styled("h4")(({ theme }) => ({
  fontSize: "1rem",
  fontWeight: "500",
  marginBottom: "16px",
  textTransform: "capitalize",
  color: theme.palette.text.secondary,
}));

const Analytics = () => {
  const { palette } = useTheme();

  return (
    <Fragment>
     

      <ContentBox className="analytics">
        <Grid container spacing={3}>
          <Grid item  xs={12}>
            <StatCards />
        
            <H4>In Query</H4>
            <OrdersQuery />
            <H4>In Progress</H4>
<ProgressCard />


          </Grid>

         
        </Grid>
      </ContentBox>
    </Fragment>
  );
};

export default Analytics;
