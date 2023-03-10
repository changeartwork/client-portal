import { Box, } from '@mui/system';

import {
Button,
Grid,
Icon,
styled,
MenuItem,
Card,
Typography,
} from "@mui/material";
import { Span } from "app/components/Typography";
import { useEffect, useState } from "react";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import { NavLink, } from 'react-router-dom';





const countries = [
{
value: 'NY',
label: 'Newyork',
},
{
value: 'EUR',
label: '€',
},
{
value: 'BTC',
label: '฿',
},
{
value: 'JPY',
label: '¥',
},
];

const States = [
{
value: 'NY',
label: 'Newyork',
},
{
value: 'EUR',
label: '€',
},
{
value: 'BTC',
label: '฿',
},
{
value: 'JPY',
label: '¥',
},
];

const Cities = [
{
value: 'NY',
label: 'Newyork',
},
{
value: 'EUR',
label: '€',
},
{
value: 'BTC',
label: '฿',
},
{
value: 'JPY',
label: '¥',
},
];


const paymentTerms = [
{
value: 'NY',
label: '7 Days',
},
{
value: 'EUR',
label: '15 Days',
},
{
value: 'BTC',
label: '30 Days',
},

];


const paymentmode = [
{
value: 'NY',
label: 'Credit Card',
},
{
value: 'EUR',
label: 'Credit Card on file',
},
{
value: 'BTC',
label: 'Paypal in Advance',
},

{
value: 'BTC',
label: 'Check',
},
{
value: 'BTC',
label: ' A/C Transfer',
},

];

const currency = [
{
value: 'NY',
label: 'US Dollar',
},
{
value: 'EUR',
label: 'Canadian Dollar',
},
{
value: 'BTC',
label: 'British Pound',
},



];





const JWTRoot = styled(Card)(() => ({
background: '#4F4F4F',
minHeight: '100% !important',
display: 'flex',
alignItems: 'center',
justifyContent: 'center',

}));

const Div = styled('div')(({ }) => ({
width: "80%",

}));

const TextField = styled(TextValidator)(() => ({
width: "100%",
marginBottom: "16px",
}));

const JwtRegister = () => {
const [state, setState] = useState({ date: new Date() });

useEffect(() => {
ValidatorForm.addValidationRule("isPasswordMatch", (value) => {
if (value !== state.password) return false;

return true;
});
return () => ValidatorForm.removeValidationRule("isPasswordMatch");
}, [state.password]);

const handleSubmit = (event) => {
// console.log("submitted");
// console.log(event);
};

const handleChange = (event) => {
event.persist();
setState({ ...state, [event.target.name]: event.target.value });
};



const {
clientid,
firstname,
lastname,
mobile,
password,

email1,

businessname,
cellnumber,

zipcode
} = state;





return (
<JWTRoot>
  <Div>
    <Card className="card" sx={{ padding: 4 }}>
      <Grid container>


        <Grid item sm={12} xs={12}>

          <Typography level="h1" fontSize="xl" fontWeight="500" color="#F9AD19" sx={{ mb: 2 }}>CHANGE! - CLIENT SIGNUP</Typography>




          <ValidatorForm onSubmit={handleSubmit} onError={()=> null}>
            <Grid container spacing={8}>
              <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>

                <TextField type="number" disabled="false" name="clientid" id="standard-basic" value={clientid || "" } onChange={handleChange} errorMessages={["this field is required"]} label="Client Id (Min length 4, Max length 9)" validators={["required", "minStringLength: 4" , "maxStringLength: 9" ]} />

                <TextField type="text" name="firstname" label="First Name" onChange={handleChange} value={firstname || "" } validators={["required"]} errorMessages={["this field is required"]} />

                <TextField type="text" name="lastname" label="Last Name" onChange={handleChange} value={lastname || "" } validators={["required"]} errorMessages={["this field is required"]} />

                <TextField type="text" name="businessname" label="Business Name" onChange={handleChange} value={businessname || "" } validators={["required"]} errorMessages={["this field is required"]} />

                <Grid container spacing={3}>
                  <Grid item sm={3} xs={12}>
                    <TextField type="text" name="mobile" value={mobile || "" } label="Mobile Nubmer" onChange={handleChange} validators={["required"]} errorMessages={["this field is required"]} />
                  </Grid>
                  <Grid item sm={9} xs={12}>
                    <TextField type="text" name="mobile" value={mobile || "" } label="Mobile Nubmer" onChange={handleChange} validators={["required"]} errorMessages={["this field is required"]} />
                  </Grid>

                </Grid>

                <Grid container spacing={3}>
                  <Grid item sm={3} xs={12}>
                    <TextField type="text" name="cellnumber" value={cellnumber || "" } label="Cell Nubmer" onChange={handleChange} validators={["required"]} errorMessages={["this field is required"]} />
                  </Grid>
                  <Grid item sm={9} xs={12}>
                    <TextField type="text" name="cellnumber" value={cellnumber || "" } label="Cell Nubmer" onChange={handleChange} validators={["required"]} errorMessages={["this field is required"]} />
                  </Grid>

                </Grid>



                <TextField type="email" name="email1" label="Email " value={email1 || "" } onChange={handleChange} validators={["required", "isEmail" ]} errorMessages={["this field is required", "email is not valid" ]} />
                <TextField name="password" type="password" label="Password" value={password || "" } onChange={handleChange} validators={["required"]} errorMessages={["this field is required"]} />

              </Grid>

              <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>

                <TextField id="outlined-select-terms" select label="Payments Terms" defaultValue="NY" helperText="Please select your Payments terms">
                  {paymentTerms.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                  {option.label}
                  </MenuItem>
                  ))}
                </TextField>


                <TextField id="outlined-select-terms" select label="Payments Mode" defaultValue="NY" helperText="Please select your Payments terms">
                  {paymentmode.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                  {option.label}
                  </MenuItem>
                  ))}
                </TextField>

                <TextField id="outlined-select-currency" select label="Currency" defaultValue="NY" helperText="Please select your Currency">
                  {currency.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                  {option.label}
                  </MenuItem>
                  ))}
                </TextField>

                <TextField id="outlined-select-State" select label="State" defaultValue="NY" helperText="Please select your State">
                  {States.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                  {option.label}
                  </MenuItem>
                  ))}
                </TextField>

                <TextField id="outlined-select-City" select label="City" defaultValue="NY" helperText="Please select your City">
                  {Cities.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                  {option.label}
                  </MenuItem>
                  ))}
                </TextField>

                <TextField id="outlined-select-Country" select label="Country" defaultValue="NY" helperText="Please select your Country">
                  {countries.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                  {option.label}
                  </MenuItem>
                  ))}
                </TextField>


                <TextField type="text" name="zipcode" value={zipcode || "" } label="Zip code" onChange={handleChange} validators={["required"]} errorMessages={["this field is required"]} />
              </Grid>



            </Grid>

            <Grid item sm={12} xs={12} textAlign="right">

              <Button color="yellow" variant="contained" type="submit" sx={{  borderRadius: '30px', }}>
                <Icon>send</Icon>
                <Span sx={{ pl: 1, textTransform: "capitalize" }}>Sign UP</Span>
              </Button>


            </Grid>

            <Grid item sm={12} xs={12} textAlign="right" sx={{ mt: 2 }}>
              <NavLink to="/session/signin">
                Already have an account?<Span sx={{  color:"#1976d2", }}>Login</Span>
              </NavLink>
            </Grid>

          </ValidatorForm>



        </Grid>
      </Grid>
    </Card>
  </Div>
</JWTRoot>
);
};

export default JwtRegister;