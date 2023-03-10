import { Box, Card, Grid, styled, } from '@mui/material';
import { Small } from 'app/components/Typography';
import Divider from '@mui/material/Divider';

import Chip from '@mui/material/Chip';
const StyledCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '24px !important',
  background: theme.palette.background.paper,
 
  [theme.breakpoints.down('sm')]: { padding: '16px !important' },
}));



const Heading = styled('h6')(({ theme }) => ({
  margin: 0,
  marginTop: '4px',
  fontSize: '14px',
  fontWeight: '500',
  color: theme.palette.white.contrastText,
}));

const InprogressCard = () => {
  const cardList = [
    {  projectype: 'Basic logo', designname: 'Vector Artwork',  orderstatus:'Live',
     updatedon:'12-02-2023', updatetime:'05:30:12', lastmessage:'We will finish the project within 4 hours'},
   
     {  projectype: 'Basic logo', designname: 'Vector Artwork',  laststatus:'Waiting for your Response',
     updatedon:'12-02-2023', updatetime:'05:30:12', lastmessage:'We will finish the project within 4 hours'},

     {  projectype: 'Basic logo', designname: 'Vector Artwork',  laststatus:'Waiting for your Response',
     updatedon:'12-02-2023', updatetime:'05:30:12', lastmessage:'We will finish the project within 4 hours'},
    
  ];

  return (

    <Grid container spacing={3} sx={{ mb: '24px' }}>
        {cardList.map((item, index) => ( 
      <Grid  xs={12} md={4}  item key={index}>
          <StyledCard elevation={6} sx={{ borderTop: 15,borderColor:'yellow.main' }}>
       
          <Box sx={{ width: '100%', }}>
      <Box sx={{ my: 3, mx: 2 }}>
        <Grid container alignItems="center">
          <Grid item xs>
          <Box >
              <Small>Project Type</Small>
                <Heading>{item.projectype}</Heading>
                
               
             </Box>
          </Grid>
          <Grid item>
          <Box >
              <Small>Design Name</Small>
                <Heading>{item.designname}</Heading>
                

             </Box>
          </Grid>
        </Grid>
     

      </Box>
      <Divider variant="middle" />

      <Box sx={{ my: 3, mx: 2 }}>
        <Grid container alignItems="center">
          <Grid item xs>
          <Box >
              <Small>Order Status Updated</Small>
                <Heading>{item.orderstatus}</Heading>
                
               
             </Box>
          </Grid>
          <Grid item>
          <Box >
              <Small>Design Name</Small>
                <Heading>{item.designname}</Heading>
                

             </Box>
          </Grid>
        </Grid>
       </Box>
       <Divider variant="middle" />
      
       <Box sx={{ my: 3, mx: 2 }}>
       
       <Grid container alignItems="center">
          <Grid item xs>
          <Box >
          <Chip color="yellowchips" label="Normal" />
               
             </Box>
          </Grid>
          <Grid item>
          <Box >
          <Chip color="greenchips" label="In Progress" />  

             </Box>
          </Grid>
        </Grid>




      
      
        
        
      
     </Box>
      
    </Box>
           </StyledCard>
        </Grid>

))}


    </Grid>
  );
};

export default InprogressCard;
