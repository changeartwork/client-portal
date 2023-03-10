import { Box, Card, Grid, Typography, } from '@mui/material';




const StatCards = () => {

  
  

  return (
    <Grid container spacing={3} sx={{ mb: '24px' }}>
     
        <Grid item xs={12} md={2} >
         
        <Card sx={{ background:'#F9AD19' }}>
              <Box sx={{ my: '24px' }}>
              <Typography level="h1"  fontWeight="500" color="#ffffff"  sx={{ mb: 2, fontSize:'18px' }} align="center">Request A Quote </Typography>
              </Box>
             </Card> 

             
       
        </Grid>


        <Grid item xs={12} md={2} >
         
         <Card sx={{ background:'#4F4F4F' }}>
               <Box sx={{ my: '24px' }}>
               <Typography level="h1" fontSize="xl" fontWeight="500" color="#ffffff"  sx={{ mb: 2, fontSize:'18px' }} align="center">Place An order</Typography>
               </Box>
              </Card> 
 
          </Grid>

          <Grid item xs={12} md={2} >
         
         <Card sx={{ background:'#F9AD19' }}>
               <Box sx={{ my: '24px' }}>
               <Typography level="h1" fontSize="xl" fontWeight="500" color="#ffffff"  sx={{ mb: 2, fontSize:'18px' }} align="center">Existing Orders </Typography>
               </Box>
              </Card> 
 
              
        
         </Grid>

         <Grid item xs={12} md={2} >
         
         <Card sx={{ background:'#4F4F4F' }}>
               <Box sx={{ my: '24px' }}>
               <Typography level="h1" fontSize="xl" fontWeight="500" color="#ffffff"  sx={{ mb: 2, fontSize:'18px' }} align="center">Existing Quotes</Typography>
               </Box>
              </Card> 
 
          </Grid>

          <Grid item xs={12} md={2} >
         
         <Card sx={{ background:'#F9AD19' }}>
               <Box sx={{ my: '24px' }}>
               <Typography level="h1" fontSize="xl" fontWeight="500" color="#ffffff"  sx={{ mb: 2, fontSize:'18px' }} align="center">Pay with credit Card</Typography>
               </Box>
              </Card> 
 
          </Grid>

          <Grid item xs={12} md={2} >
         
         <Card sx={{ background:'#4F4F4F' }}>
               <Box sx={{ my: '24px' }}>
               <Typography level="h1" fontSize="xl" fontWeight="500" color="#ffffff"  sx={{ mb: 2, fontSize:'18px' }} align="center">Pay with  Paypal</Typography>
               </Box>
              </Card> 
 
          </Grid>


    </Grid>
  );
};

export default StatCards;
