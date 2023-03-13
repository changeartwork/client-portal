import { LoadingButton } from '@mui/lab';
import { Card, Checkbox, Grid, TextField,Typography } from '@mui/material';
import { Box, styled, useTheme } from '@mui/system';
import { Paragraph } from 'app/components/Typography';
import useAuth from 'app/hooks/useAuth';
import { Formik } from 'formik';
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

const FlexBox = styled(Box)(() => ({ display: 'flex', alignItems: 'center' }));

const JustifyBox = styled(FlexBox)(() => ({ justifyContent: 'center' }));

const ContentBox = styled(Box)(() => ({
height: '100%',
padding: '32px',
position: 'relative',
background: 'rgba(0, 0, 0, 0.01)',
}));

const JWTRoot = styled(JustifyBox)(() => ({
background: '#4f4f4f',
minHeight: '100% !important',
'& .card': {
maxWidth: 800,
minHeight: 400,
margin: '1rem',
display: 'flex',
borderRadius: 12,
alignItems: 'center',
},
}));

// inital login credentials
const initialValues = {
client_id: 17,
email: 'tonydev@cuemindai.com',
password: 'tonydev007',
remember: true,
};

// form field validation schema
const validationSchema = Yup.object().shape({
password: Yup.string()
.min(6, 'Password must be 6 character length')
.required('Password is required!'),
email: Yup.string().email('Invalid Email address').required('Email is required!'),
});

const JwtLogin = () => {
const theme = useTheme();
const navigate = useNavigate();
const [loading, setLoading] = useState(false);

const { login } = useAuth();


const [signup, setSignup] = useState(false);




const handleSignup=()=>{
setSignup(true);
try{
navigate("/cpdev/session/signup")
}catch(e){
setSignup(false);
}
}
const handleFormSubmit = async (values) => {
setLoading(true);
try {
await login(values.client_id, values.email, values.password);
navigate('/cpdev');
} catch (e) {
setLoading(false);
}
};

return (
<JWTRoot>
  <Card className="card">
    <Grid container>
      <Grid item sm={6} xs={12}>
        <JustifyBox p={4} height="100%" sx={{ minWidth: 320 }}>
          <img src="/cpdev/assets/images/illustrations/loginbg.svg" width="100%" alt="" />
        </JustifyBox>
      </Grid>

      <Grid item sm={6} xs={12}>
        <ContentBox>
          <Typography level="h1" fontSize="xl" fontWeight="500" color="#F9AD19" align="center" sx={{ mb: 2 }}>CHANGE! - CLIENT PORTAL</Typography>
          <Formik onSubmit={handleFormSubmit} initialValues={initialValues} validationSchema={validationSchema}>
            {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <TextField fullWidth size="small" type="number" name="client_id" label="Client ID" variant="outlined" onBlur={handleBlur} value={values.client_id} onChange={handleChange} helperText={touched.client_id && errors.client_id} error={Boolean(errors.client_id && touched.client_id)} sx={{ mb: 3 }} />


              <TextField fullWidth size="small" type="email" name="email" label="Email" variant="outlined" onBlur={handleBlur} value={values.email} onChange={handleChange} helperText={touched.email && errors.email} error={Boolean(errors.email && touched.email)} sx={{ mb: 3 }} />

              <TextField fullWidth size="small" name="password" type="password" label="Password" variant="outlined" onBlur={handleBlur} value={values.password} onChange={handleChange} helperText={touched.password && errors.password} error={Boolean(errors.password && touched.password)} sx={{ mb: 1.5 }} />

              <FlexBox justifyContent="space-between">
                <FlexBox gap={1}>
                  <Checkbox size="small" name="remember" onChange={handleChange} checked={values.remember} sx={{ padding: 0 }} />

                  <Paragraph>Remember Me</Paragraph>
                </FlexBox>

                <NavLink to="/cpdev/session/forgot-password" style={{ color: theme.palette.primary.main }}>
                  Forgot password?
                </NavLink>
              </FlexBox>
              <LoadingButton type="submit" color="gray" loading={loading} onClick={handleSignup} variant="contained" sx={{ my: 2,mx:2 }}>
                Sign UP
              </LoadingButton>
              <LoadingButton type="submit" color="yellow" loading={loading} variant="contained" sx={{ my: 2 }}>
                Sign In
              </LoadingButton>


            </form>
            )}
          </Formik>
        </ContentBox>
      </Grid>
    </Grid>
  </Card>
</JWTRoot>
);
};

export default JwtLogin;