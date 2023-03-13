import { Box, Card, Grid, Typography, } from '@mui/material';
import { useState } from "react";
import MemberEditorDialog from "./RequestquoteDialog";


const StatCards = () => {


const [user] = useState(null);

const [shouldOpenEditorDialog, setShouldOpenEditorDialog] = useState(false);
const [setShouldOpenConfirmationDialog] = useState(false);


const handleDialogClose = () => {
setShouldOpenEditorDialog(false);
setShouldOpenConfirmationDialog(false);

};



return (
<Grid container spacing={3} sx={{ mb: '24px' }}>

  <Grid item xs={12} md={2}>

    <Card sx={{ background: '#F9AD19', cursor: "pointer" }} onClick={()=> setShouldOpenEditorDialog(true)}>
      <Box sx={{ my: '24px' }}>
        <Typography level="h1" fontWeight="500" color="#ffffff" sx={{ mb: 2, fontSize: '18px' }} align="center">Request A Quote </Typography>
      </Box>
    </Card>




  </Grid>


  <Grid item xs={12} md={2}>

    <Card sx={{ background: '#4F4F4F' }}>
      <Box sx={{ my: '24px' }}>
        <Typography level="h1" fontSize="xl" fontWeight="500" color="#ffffff" sx={{ mb: 2, fontSize: '18px' }} align="center">Place An order</Typography>
      </Box>
    </Card>

  </Grid>

  <Grid item xs={12} md={2}>

    <Card sx={{ background: '#F9AD19' }}>
      <Box sx={{ my: '24px' }}>
        <Typography level="h1" fontSize="xl" fontWeight="500" color="#ffffff" sx={{ mb: 2, fontSize: '18px' }} align="center">Existing Orders </Typography>
      </Box>
    </Card>



  </Grid>

  <Grid item xs={12} md={2}>

    <Card sx={{ background: '#4F4F4F' }}>
      <Box sx={{ my: '24px' }}>
        <Typography level="h1" fontSize="xl" fontWeight="500" color="#ffffff" sx={{ mb: 2, fontSize: '18px' }} align="center">Existing Quotes</Typography>
      </Box>
    </Card>

  </Grid>

  <Grid item xs={12} md={2}>

    <Card sx={{ background: '#F9AD19' }}>
      <Box sx={{ my: '24px' }}>
        <Typography level="h1" fontSize="xl" fontWeight="500" color="#ffffff" sx={{ mb: 2, fontSize: '18px' }} align="center">Pay with credit Card</Typography>
      </Box>
    </Card>

  </Grid>

  <Grid item xs={12} md={2}>

    <Card sx={{ background: '#4F4F4F' }}>
      <Box sx={{ my: '24px' }}>
        <Typography level="h1" fontSize="xl" fontWeight="500" color="#ffffff" sx={{ mb: 2, fontSize: '18px' }} align="center">Pay with Paypal</Typography>
      </Box>
    </Card>

  </Grid>



  <Card sx={{ width: "100%", overflow: "auto" }} elevation={6}>

    {shouldOpenEditorDialog && (
    <MemberEditorDialog member={user} open={shouldOpenEditorDialog} handleClose={handleDialogClose} />
    )}

  </Card>


</Grid>
);
};

export default StatCards;