import React, { useState, Fragment } from 'react';
import {
  Box,
  Card,
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  styled,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
  ListSubheader,
  FormLabel,
  Alert,
  AlertTitle
} from '@mui/material';
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import useAuth from '../../../hooks/useAuth';
import axios from 'axios';
import FileUpload from "react-material-file-upload";

const steps = [
  'Select the service type',
  'Add request details',
  'Upload source files',
];

const TextField = styled(TextValidator)(() => ({
  width: "100%",
  marginBottom: "16px",
  marginTop: "16px"
}));

const Title = styled('span')(() => ({
  fontSize: '1rem',
  fontWeight: '500',
  textTransform: 'capitalize',
}));

const CustomCardHeader = styled(Box)(() => ({
  display: 'flex',
  paddingLeft: '24px',
  paddingRight: '24px',
  marginBottom: '24px',
  alignItems: 'center',
  justifyContent: 'space-between',
}));

const QuoteFormWithDetails = () => {

  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());
  const [serviceType, setServiceType] = useState('');
  const [priority, setPriority] = useState('normal');
  const [processType, setProcessType] = useState('screen_printing');
  const [fileFormat, setFileFormat] = useState('OTHERS');
  const [placement, setPlacement] = useState('others');
  const [colors, setNoOfColours] = useState('0');
  const [pages, setNoOfPages] = useState('0');
  const [sides, setSides] = useState('');
  const [layout, setLayout] = useState('');
  const [colormode, setColorMode] = useState('');
  const [state, setState] = useState({});
  const [files, setFiles] = useState([]);
  const [success, setSuccess] = useState(false);
  const [failure, setFailure] = useState(false);
  const [err, setErr] = useState({});


  let { user } = useAuth();

  const handleSubmit = (event) => {
    const bodyFormData = new FormData();
    bodyFormData.append('name', user.name);
    bodyFormData.append('mail', user.email);
    bodyFormData.append('contact', state.mobile);
    bodyFormData.append('memo', state.memo);
    bodyFormData.append('service_type', serviceType);
    bodyFormData.append('business_name', state.business_name);
    const additionalDetails = {};
    if (serviceType === "VECTOR_ART_WORK") {
      additionalDetails.design_name = state.design_name;
      additionalDetails.color = colors;
      additionalDetails.priority = priority;
      additionalDetails.process_type = processType;
      additionalDetails.final_files = fileFormat;
    }
    if (serviceType === "DIGITIZING") {
      additionalDetails.design_name = state.design_name;
      additionalDetails.placement = placement;
      additionalDetails.fabric = state.fabric;
      additionalDetails.width = state.width;
      additionalDetails.height = state.height;
      additionalDetails.color = colors;
      additionalDetails.priority = priority;
      additionalDetails.process_type = processType;
      additionalDetails.final_files = fileFormat;
    }


    if (serviceType === "BUSINESS_CARD") {
      additionalDetails.design_name = state.design_name;
      additionalDetails.placement = placement;
      additionalDetails.colormode = colormode;
      additionalDetails.color = colors;
      additionalDetails.priority = priority;
      additionalDetails.layout = layout;
      additionalDetails.sides = sides;
      additionalDetails.process_type = processType;
      additionalDetails.final_files = fileFormat;
    }

    if (serviceType === "BROUCHER") {
      additionalDetails.design_name = state.design_name;
      additionalDetails.color = colors;
      additionalDetails.priority = priority;
      additionalDetails.pages = pages;
      additionalDetails.process_type = processType;
      additionalDetails.final_files = fileFormat;
    }

    if (serviceType === "LOGO") {
      additionalDetails.design_name = state.design_name;
      additionalDetails.color = colors;
      additionalDetails.priority = priority;
      additionalDetails.shapes = state.shapes;
      additionalDetails.font = state.font;
      additionalDetails.pages = pages;
      additionalDetails.process_type = processType;
      additionalDetails.final_files = fileFormat;
      additionalDetails.audience = state.audience;
    }

    if (serviceType === "CARTOON") {
      additionalDetails.design_name = state.design_name;
      additionalDetails.color = colors;
      additionalDetails.priority = priority;
      additionalDetails.flips = state.filps;
      additionalDetails.process_type = processType;
      additionalDetails.final_files = fileFormat;
    }

    if (serviceType === "OTHERS") {
      additionalDetails.priority = priority;
      additionalDetails.final_files = fileFormat;
    }


    bodyFormData.append('additional_details', JSON.stringify(additionalDetails));
    for (const file of files) {
      bodyFormData.append('files', file)
    }
    console.log("requestBody", JSON.stringify(bodyFormData))
    axios({
      method: "post",
      url: `${process.env.REACT_APP_QS_URL}/create`,
      data: bodyFormData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(function (response) {
        //handle success
        setFailure(false);
        console.log("success", response);
        setSuccess(true);
        setState({});
        setFiles([]);
      })
      .catch(function (response) {
        //handle error
        console.log("error", response);
        setSuccess(false);
        setFailure(true);
        setErr(response)
        setState({});
        setFiles([]);
      });
  };

  const isStepOptional = (step) => {
    return step === 5;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const handleChange = (event) => {
    const serviceType = event.target.value;
    setServiceType(serviceType);
  };

  const handleChangeColorMode = (event) => {
    const colormode = event.target.value;
    setColorMode(colormode);
  };

  const handleChangeSides = (event) => {
    const sides = event.target.value;
    setSides(sides);
  };

  const handleChangeLayout = (event) => {
    const layout = event.target.value;
    setLayout(layout);
  };

  const handleChangePriority = (event) => {
    const priority = event.target.value;
    setPriority(priority);
  };

  const handleChangeProcessType = (event) => {
    const processType = event.target.value;
    setProcessType(processType);
  };

  const handleChangeNoOfColors = (event) => {
    const colors = event.target.value;
    setNoOfColours(colors);
  };

  const handleChangeFinalFileFormat = (event) => {
    const fileFormat = event.target.value;
    setFileFormat(fileFormat);
  };

  const handleChangePlacement = (event) => {
    const placement = event.target.value;
    setPlacement(placement);
  };

  const handleChangeNoOfPages = (event) => {
    const pages = event.target.value;
    setNoOfPages(pages);
  };

  const handleChangeState = (event) => {
    event.persist();
    setState({ ...state, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <Card elevation={3} sx={{ pt: '20px', mb: 3 }}>
        <CustomCardHeader>
          <Title>Placing new quotation</Title>
        </CustomCardHeader>

      </Card>
      <Box sx={{ width: '100%' }}>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
            if (isStepOptional(index)) {
              labelProps.optional = (
                <Typography variant="caption">Optional</Typography>
              );
            }
            if (isStepSkipped(index)) {
              stepProps.completed = false;
            }
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === steps.length ? (
          <Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button color="primary"
                variant="contained" onClick={handleReset}>Reset</Button>
            </Box>
          </Fragment>
        ) : (
          <Fragment>
            {activeStep === 0 &&
              <Box elevation={3} sx={{ pt: '20px', mb: 3 }}>
                <FormControl fullWidth>
                  <InputLabel id="service-type">Service Type</InputLabel>
                  <Select
                    labelId="serviceType"
                    id="serviceType"
                    value={serviceType}
                    label="Service Type"
                    onChange={event => {
                      event.preventDefault();
                      handleChange(event);
                    }}
                  >
                    <MenuItem value={'VECTOR_ART_WORK'}>Vector Artwork</MenuItem>
                    <MenuItem value={'DIGITIZING'}>Digitizing</MenuItem>
                    <MenuItem value={'BUSINESS_CARD'}>Business Card</MenuItem>
                    <MenuItem value={'BROUCHER'}>Broucher</MenuItem>
                    <MenuItem value={'LOGO'}>Logo Designing</MenuItem>
                    <MenuItem value={'CARTOON'}>Cartoon Box Designing</MenuItem>
                    <MenuItem value={'OTHERS'}>Others</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            }
            {activeStep === 1 &&
              <ValidatorForm onSubmit={() => null} onError={() => null}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                  <Grid item xs={2} sm={4} md={4}>
                    <TextField
                      type="text"
                      name="mobile"
                      label="Mobile Nubmer"
                      onChange={handleChangeState}
                      validators={["required"]}
                      errorMessages={["this field is required"]}
                    />
                  </Grid>
                  <Grid item xs={2} sm={4} md={4}>

                    <TextField
                      type="text"
                      name="business_name"
                      label="Business Name"
                      onChange={handleChangeState}
                    />
                  </Grid>
                  <Grid item xs={2} sm={4} md={4} >

                    <TextField
                      type="text"
                      name="design_name"
                      label="Design Name"
                      onChange={handleChangeState}
                    />
                  </Grid>
                  <Grid item xs={2} sm={2} md={2} >
                    <InputLabel id="priority">Priority</InputLabel>
                    <Select
                      labelId="priority"
                      id="priority"
                      value={priority}
                      label="Priority"
                      onChange={event => {
                        event.preventDefault();
                        handleChangePriority(event);
                      }}
                    >
                      <MenuItem value={'normal'}>Normal</MenuItem>
                      <MenuItem value={'rush'}>Rush</MenuItem>
                    </Select>
                  </Grid>
                  {
                    (serviceType === 'VECTOR_ART_WORK' || serviceType === 'BUSINESS_CARD' || serviceType === 'BROUCHER' || serviceType === 'LOGO' || serviceType === 'CARTOON') &&
                    <Grid item xs={2} sm={2} md={2} >
                      <InputLabel id="process_type">Process Type</InputLabel>
                      <Select
                        labelId="process_type"
                        id="process_type"
                        value={processType}
                        label="Process Type"
                        onChange={event => {
                          event.preventDefault();
                          handleChangeProcessType(event);
                        }}
                      >
                        <MenuItem value={'screen_printing'}>Screen Printing</MenuItem>
                        <MenuItem value={'offset_printing'}>Offset Printing</MenuItem>
                        <MenuItem value={'digital_printing'}>Digital Printing</MenuItem>
                        <MenuItem value={'others'}>Others</MenuItem>
                      </Select>
                    </Grid>}
                  {
                    serviceType !== 'OTHERS' &&
                    <Grid item xs={2} sm={2} md={2} >
                      <InputLabel id="colors">No. of colors</InputLabel>
                      <Select
                        labelId="colors"
                        id="colors"
                        value={colors}
                        label="No. of colors"
                        onChange={event => {
                          event.preventDefault();
                          handleChangeNoOfColors(event);
                        }}
                      >
                        {Array.from(Array(11)).map((_, index) => (
                          <MenuItem value={index}>{index}</MenuItem>))}
                      </Select>
                    </Grid>
                  }

                  {
                    serviceType === 'BROUCHER' &&
                    <Grid item xs={2} sm={2} md={2} >
                      <InputLabel id="pages">No. of pages</InputLabel>
                      <Select
                        labelId="pages"
                        id="pages"
                        value={pages}
                        label="No. of pages"
                        onChange={event => {
                          event.preventDefault();
                          handleChangeNoOfPages(event);
                        }}
                      >
                        {Array.from(Array(11)).map((_, index) => (
                          <MenuItem value={index}>{index}</MenuItem>))}
                      </Select>
                    </Grid>
                  }
                  {serviceType === 'DIGITIZING' &&
                    <Grid item xs={2} sm={4} md={4} >
                      <TextField
                        type="text"
                        name="width"
                        label="Width"
                        onChange={handleChangeState}
                      />
                    </Grid>
                  }
                  {serviceType === 'DIGITIZING' &&
                    <Grid item xs={2} sm={4} md={4} >
                      <TextField
                        type="text"
                        name="heigth"
                        label="Heigth"
                        onChange={handleChangeState}
                      />
                    </Grid>
                  }
                  {serviceType === 'DIGITIZING' &&
                    <Grid item xs={2} sm={4} md={4} >
                      <TextField
                        type="text"
                        name="fabric"
                        label="Fabric"
                        onChange={handleChangeState}
                      />
                    </Grid>
                  }
                  {serviceType === 'LOGO' &&
                    <Grid item xs={2} sm={4} md={4} >
                      <TextField
                        type="text"
                        name="font"
                        label="Font Style"
                        onChange={handleChangeState}
                      />
                    </Grid>
                  }
                  {serviceType === 'LOGO' &&
                    <Grid item xs={2} sm={4} md={4} >
                      <TextField
                        type="text"
                        name="shape"
                        label="Logo Shape"
                        onChange={handleChangeState}
                      />
                    </Grid>
                  }
                  {serviceType === 'LOGO' &&
                    <Grid item xs={2} sm={4} md={4} >
                      <TextField
                        type="text"
                        name="audience"
                        label="Age Group | Audience"
                        onChange={handleChangeState}
                      />
                    </Grid>
                  }
                  {serviceType === 'CARTOON' &&
                    <Grid item xs={2} sm={4} md={4} >
                      <TextField
                        type="text"
                        name="flips"
                        label="No. of Flips"
                        onChange={handleChangeState}
                      />
                    </Grid>
                  }
                  {
                    (serviceType === 'VECTOR_ART_WORK' || serviceType === 'BUSINESS_CARD' || serviceType === 'BROUCHER' || serviceType === 'LOGO' || serviceType === 'LOGO' || serviceType === 'OTHERS') &&

                    <Grid item xs={2} sm={2} md={2} >
                      <InputLabel id="file_formats">Final file formats</InputLabel>
                      <Select
                        labelId="file_formats"
                        id="file_formats"
                        value={fileFormat}
                        label="Final file formats"
                        onChange={event => {
                          event.preventDefault();
                          handleChangeFinalFileFormat(event);
                        }}
                      >
                        <MenuItem value={'PDF,EPS'}>PDF, EPS</MenuItem>
                        <MenuItem value={'PDF,AI'}>PDF, AI</MenuItem>

                        <MenuItem value={'PDF,EPS,AI'}>PDF, EPS, AI</MenuItem>
                        <MenuItem value={'PDF,CDR'}>PDF, CDR</MenuItem>
                        <MenuItem value={'PDF,EPS,CDR'}>PDF, EPS, CDR</MenuItem>
                        <MenuItem value={'PDF,EPS,CDR,AI'}>PDF, EPS, CDR, AI</MenuItem>
                        <MenuItem value={'OTHERS'}>Others</MenuItem>
                      </Select>
                    </Grid>
                  }
                  {
                    serviceType === 'DIGITIZING' &&

                    <Grid item xs={2} sm={2} md={2} >
                      <InputLabel id="file_formats">Final file formats</InputLabel>
                      <Select
                        labelId="file_formats"
                        id="file_formats"
                        value={fileFormat}
                        label="Final file formats"
                        onChange={event => {
                          event.preventDefault();
                          handleChangeFinalFileFormat(event);
                        }}
                      >
                        <MenuItem value={'PDF,DST'}>PDF, DST</MenuItem>
                        <MenuItem value={'PDF,DST,EMB'}>PDF, DST, EMB</MenuItem>
                        <MenuItem value={'PDF,DST,PXF'}>PDF, DST, PXF</MenuItem>
                        <MenuItem value={'PDF,DST,CND,EXP'}>PDF, DST, CND, EXP</MenuItem>
                        <MenuItem value={'PDF,DST,CND,EXP,EMB'}>PDF, DST, CND, EXP, EMB</MenuItem>
                        <MenuItem value={'OTHERS'}>Others</MenuItem>
                      </Select>
                    </Grid>
                  }
                  {
                    serviceType === 'BUSINESS_CARD' &&
                    <Grid item xs={2} sm={2} md={2} >
                      <InputLabel id="layout">Layout</InputLabel>
                      <Select
                        labelId="layout"
                        id="layout"
                        value={layout}
                        label="Layout"
                        onChange={event => {
                          event.preventDefault();
                          handleChangeLayout(event);
                        }}
                      >
                        <MenuItem value={'vertical'}>Vertical</MenuItem>
                        <MenuItem value={'horizontal'}>Horizontal</MenuItem>
                      </Select>
                    </Grid>
                  }
                  {
                    serviceType === 'BUSINESS_CARD' &&
                    <Grid item xs={2} sm={2} md={2} >
                      <InputLabel id="sides">No. of Sides</InputLabel>
                      <Select
                        labelId="sides"
                        id="sides"
                        value={sides}
                        label="No. of Sides"
                        onChange={event => {
                          event.preventDefault();
                          handleChangeSides(event);
                        }}
                      >
                        <MenuItem value={'front'}>Front</MenuItem>
                        <MenuItem value={'back'}>Back</MenuItem>
                        <MenuItem value={'front,back'}>Front and Back</MenuItem>
                      </Select>
                    </Grid>
                  }
                  {
                    serviceType === 'BUSINESS_CARD' &&
                    <Grid item xs={2} sm={2} md={2} >
                      <InputLabel id="colormode">Color Mode</InputLabel>
                      <Select
                        labelId="colormode"
                        id="colormode"
                        value={colormode}
                        label="Color Mode"
                        onChange={event => {
                          event.preventDefault();
                          handleChangeColorMode(event);
                        }}
                      >
                        <MenuItem value={'RGB'}>RGB</MenuItem>
                        <MenuItem value={'CMYK'}>CMYK</MenuItem>
                        <MenuItem value={'PANTONE'}>PANTONE</MenuItem>
                      </Select>
                    </Grid>
                  }
                  {
                    serviceType === 'DIGITIZING' &&
                    <Grid item xs={2} sm={2} md={2} >
                      <InputLabel id="placement">Placement</InputLabel>
                      <Select defaultValue={placement} id="placement" label="Placement"
                        onChange={event => {
                          event.preventDefault();
                          handleChangePlacement(event);
                        }}>
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <ListSubheader>CAP</ListSubheader>
                        <MenuItem value={"front_of_cap"}>Front of Cap</MenuItem>
                        <MenuItem value={"back_of_cap"}>Back of Cap</MenuItem>
                        <MenuItem value={"side_of_cap"}>Side of Cap</MenuItem>
                        <MenuItem value={"visor"}>Visor</MenuItem>
                        <MenuItem value={"beenie_cap"}>Beenie Cap</MenuItem>
                        <ListSubheader>Towel</ListSubheader>
                        <MenuItem value={"towel"}>Towel</MenuItem>
                        <ListSubheader>Bags</ListSubheader>
                        <MenuItem value={"bag"}>Bags</MenuItem>
                        <ListSubheader>POLO</ListSubheader>
                        <MenuItem value={"left_chest"}>Left Chest</MenuItem>
                        <MenuItem value={"sleeve"}>Sleeve</MenuItem>
                        <MenuItem value={"pocket"}>Pocket</MenuItem>
                        <MenuItem value={"full_back"}>Full Back</MenuItem>
                        <MenuItem value={"full_front"}>Full Front</MenuItem>
                        <MenuItem value={"back_yoke"}>Back Yoke</MenuItem>
                        <ListSubheader>Others</ListSubheader>
                        <MenuItem value={"others"}>Others</MenuItem>
                      </Select>
                    </Grid>
                  }
                  <Grid item xs={12} sm={12} md={12} >
                    <TextField
                      id="filled-multiline-static"
                      multiline
                      rows={4}
                      type="text"
                      name="memo"
                      label="Request Details"
                      onChange={handleChangeState}
                    /></Grid>
                </Grid>
              </ValidatorForm>
            }
            {
              activeStep === 2 &&
              <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
                <FormLabel>Upload the source files</FormLabel>
                <FileUpload maxFiles={5} maxSize={1e+7} value={files} onChange={setFiles} />
              </Grid>
            }
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Button
                color="primary"
                variant="contained"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: '1 1 auto' }} />
              {isStepOptional(activeStep) && (
                <Button color="primary"
                  variant="contained" onClick={handleSkip} sx={{ mr: 1 }}>
                  Skip
                </Button>
              )}

              <Button color="primary"
                variant="contained"
                disabled={serviceType === ''}
                onClick={activeStep === steps.length - 1 ? handleSubmit : handleNext}>
                {activeStep === steps.length - 1 ? 'Place Quote' : 'Next'}
              </Button>
            </Box>
          </Fragment>
        )}
      </Box>
      <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
        {success && <Alert onClose={() => { setSuccess(false) }} severity="success">
          <AlertTitle>Success</AlertTitle>
          Quote placed successfully <strong>check it out!</strong>
        </Alert>}
        {failure && <Alert onClose={() => { setFailure(false) }} severity="error">
          <AlertTitle>{err.message}</AlertTitle>
          {err.error}
        </Alert>}
      </Grid>
    </div>
  );
};

export default QuoteFormWithDetails;