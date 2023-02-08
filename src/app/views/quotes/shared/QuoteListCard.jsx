import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  Typography,
  MenuItem,
  Select,
  styled,
  Icon,
  IconButton,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useAuth from '../../../hooks/useAuth';
import Avatar from '@mui/material/Avatar';

const CustomCardHeader = styled(Box)(() => ({
  display: 'flex',
  paddingLeft: '24px',
  paddingRight: '24px',
  marginBottom: '24px',
  alignItems: 'center',
  justifyContent: 'space-between',
}));

const Title = styled('span')(() => ({
  fontSize: '1rem',
  fontWeight: '500',
  textTransform: 'capitalize',
}));

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2)
  }
}))


const QuoteListCard = () => {
  const classes = useStyles()
  const [filesList, setFilesList] = useState([]);
  const [errorMsg, setErrorMsg] = useState('');

  let { user } = useAuth();

  const param = {
    email: user.email
  };
  const header = {
    Authorization: localStorage.getItem('accessToken')
  }

  const formatName = (str) => {
    return str.replace(/_/g, ' ');
  }

  const formatAvatar = (str) => {
    return str.charAt(0);
  }

  const filesCount = (filesList) => {
    return filesList.length;
  }

  const formatDate = (dateParam) => {
    var date = new Date(dateParam)
    return (date.toLocaleString('en-GB', {day:'numeric', month: 'long', year:'numeric'}))
  }

  useEffect(() => {
    const getFilesList = async () => {
      try {
        const { data } = await axios.get(`${process.env.REACT_APP_QS_URL}/list`,
          { params: param, headers: header });
        setFilesList(data);
      } catch (error) {
        error.response && setErrorMsg(error.response.data);
      }
    };
    getFilesList();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      <Card elevation={3} sx={{ pt: '20px', mb: 3 }}>
        <CustomCardHeader>
          <Title>List of Quotations</Title>
          <Select size="small" defaultValue="this_month">
            <MenuItem value="this_month">Normal</MenuItem>
            <MenuItem value="last_month">Rush</MenuItem>
          </Select>
        </CustomCardHeader>

      </Card>
      <div className={classes.root}>
        <Grid
          container
          spacing={2}
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
        >
          {filesList.length > 0 ?
            filesList.map(quote => (
              <Grid item xs={12} sm={6} md={3} key={filesList.indexOf(quote)}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardHeader
                    avatar={
                      <Avatar aria-label="quote">
                        {formatAvatar(quote.service_type)}
                      </Avatar>
                    }
                    title={formatName(quote.service_type)}
                    subheader={"Status :"+ quote.status}
                  />
                  <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                      <b>Created on :</b> {formatDate(quote.createdAt)}
                      <br/><b>Last updated : </b>{formatDate(quote.updatedAt)}
                      <br/><b>Total source files :</b> {filesCount(quote.files)}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div">
                      
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Details : {quote.memo}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <IconButton>
                      <Icon color="secondary">mail</Icon>
                    </IconButton>
                    <IconButton>
                      <Icon color="secondary">comments</Icon>
                    </IconButton>
                    {/* {quote.quotations.length > 0 && <IconButton>
                      <Icon color="secondary" disabled>download</Icon>
                    </IconButton>} */}
                  </CardActions>
                </Card>
              </Grid>
            )) :
            <p className="errorMsg">{errorMsg}</p>}
        </Grid>
      </div>
    </div>
  );
};

export default QuoteListCard;
