import { Box, Card, Grid, styled, Button, IconButton, Icon,  } from '@mui/material';
import { Small } from 'app/components/Typography';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
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

const ContentBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  '& small': { color: theme.palette.text.secondary },
  '& .icon': { opacity: 0.6, fontSize: '44px', color: theme.palette.primary.main },
}));

const Heading = styled('h6')(({ theme }) => ({
  margin: 0,
  marginTop: '4px',
  fontSize: '14px',
  fontWeight: '500',
  color: theme.palette.white.contrastText,
}));

const OrdersQuery = () => {
  const cardList = [
    {  projectype: 'Basic logo', designname: 'Vector Artwork',  laststatus:'Waiting for your Response',
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
          <StyledCard elevation={6} sx={{ borderLeft: 30,borderColor:'gray.main' }}>
       
          <ContentBox >
              
              <Box ml="12px">
              <Small>Project Type</Small>
                <Heading>{item.projectype}</Heading>
                <Box sx={{ my: 4 }} /> 
                <Small>Last Status Updated</Small>
                <Heading>{item.laststatus}</Heading>
             </Box>

            
            </ContentBox>
         

            <ContentBox >
              
              <Box ml="12px">
              <Small>Design Name</Small>
                <Heading>{item.designname}</Heading>
                <Box sx={{ my: 4 }} /> 
                <Small>Updated on</Small>
                <Heading>{item.updatedon} {item.updatetime}</Heading>

             </Box>
             
            </ContentBox>
            

            <ContentBox >
            <Box sx={{ my: 4 }} /> 

              <Box ml="12px" sx={{ my: 4 }}>
              <Small>Last Message</Small>
                <Heading>{item.lastmessage}</Heading>
                <Box sx={{ my: 4 }} /> 
              
             </Box>

            
            </ContentBox>
            <Divider variant="middle" />
            <Box >
       
        <Stack direction="row" spacing={1}>
        <Button variant="contained" color="yellow" sx={{ mr: 4,  borderRadius: '30px', }}>Quick Response</Button>
          <Chip color="greenchips" label="ORDER" />
          <IconButton>
                    <Icon color="secondary">edit</Icon>
                  </IconButton>

                  <IconButton>
                    <Icon color="secondary">delete</Icon>
                  </IconButton>
          
        </Stack>
      </Box>
           
           </StyledCard>
        </Grid>

))}


    </Grid>
  );
};

export default OrdersQuery;
