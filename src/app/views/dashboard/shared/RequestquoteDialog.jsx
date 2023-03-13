import { Box, Button, Dialog, FormControlLabel, Grid, Stack, styled, Switch, MenuItem,} from "@mui/material";
import MuiTextField from "@mui/material/TextField";
import { H4 } from "app/components/Typography";
import { generateRandomId } from "app/utils/utils";
import { Formik } from "formik";
import * as Yup from "yup";
import { addNewUser, updateUser } from "./TableService";
import Select from '@mui/material/Select';

import InputLabel from '@mui/material/InputLabel';

const TextField = styled(MuiTextField)({ marginBottom: 16 });

const validationSchema = Yup.object().shape({
designname: Yup.string().min(3, "Minimum 3 characters required!").required("Name is required!"),
email: Yup.string().email().required("Email is required!"),
// phone: Yup.string().min(9).max(11).required("Phone is required!"),
phone: Yup.string().min(9).required("Phone is required!"),
balance: Yup.number().required("Phone is required!"),
age: Yup.number().required("Age is required!"),
});



const ServiceTypes = [
{
value: 'VA',
label: 'Vector Artwork',
},
{
value: 'DG',
label: 'Digitizign',
},
{
value: 'BC',
label: 'Business Card',
},
{
value: 'BH',
label: 'Brochures',
},
{
value: 'Ld',
label: 'Logo Designing',
},

{
value: 'CB',
label: 'Caton Box Designing',
},

{
value: 'OT',
label: 'Others',
},

];

const PriorityType = [
{
value: 'NM',
label: 'Normal',
},
{
value: 'RH',
label: 'Rush',
},
{
value: 'SR',
label: 'Super Rush',
},


];

const ProcessType = [
{
value: 'SC',
label: 'Screen Printing',
},
{
value: 'OF',
label: 'OffSet Printing',
},

{
value: 'DG',
label: 'Digital Printing',
},

{
value: 'OT',
label: 'Others',
},


];


const Numberofcolor = [
{
value: 'ONE',
label: '1',
},
{
value: 'TWO',
label: '2 ',
},
{
value: 'THREE',
label: '3',
},


];


const Numberofpages = [
{
value: 'ONE',
label: '1',
},
{
value: 'TWO',
label: '2 ',
},
{
value: 'THREE',
label: '3',
},


];

const PreferableColors = [
{
value: 'ONE',
label: '1',
},
{
value: 'TWO',
label: '2 ',
},
{
value: 'THREE',
label: '3',
},


];

const PreferableShapes = [
{
value: 'Square',
label: 'Square',
},
{
value: 'Rectangle',
label: 'Rectangle',
},
{
value: 'Circle',
label: 'Circle',
},
{
value: 'BH',
label: 'Brochures',
},
{
value: 'Ellipse',
label: 'Ellipse',
},

{
value: 'Rhombus',
label: 'Rhombus',
},

{
value: 'Parallelogram',
label: 'Parallelogram',
},

{
value: 'Trapezoid',
label: 'Trapezoid',
},

{
value: 'Kite',
label: 'Kite',
},

{
value: 'Equilateral Triangle',
label: 'Equilateral Triangle',
},

{
value: 'Isosceles Triangle',
label: 'Isosceles Triangle',
},

{
value: 'Scalene Triangle',
label: 'Scalene Triangle',
},
{
value: 'Right Triangle',
label: 'Right Triangle',
},
{
value: 'Regular Pentagon',
label: 'Regular Pentagon',
},

{
value: 'Regular Octagon',
label: 'Regular Octagon',
},

{
value: 'Regular Decagon',
label: 'Regular Decagon',
},

];



const Numberofsides = [
{
value: 'Front',
label: 'Front',
},
{
value: 'Back',
label: 'Back ',
},
{
value: 'Frontback',
label: 'Front & Back',
},
];


const Preferablelayout = [
{
value: 'Horizontal',
label: 'Horizontal',
},
{
value: 'Vertical',
label: 'Vertical ',
},
];


const Colormode = [
{
value: 'CMYK',
label: 'CMYK',
},
{
value: 'RGB',
label: 'RGB ',
},
{
value: 'PANTONE',
label: 'PANTONE',
},
];




// VECTOR ARTWORK
const FinalformatVector = [
{
value: 'PE',
label: 'PDF, EPS',
},
{
value: 'PA',
label: 'PDF, AI ',
},
{
value: 'PEA',
label: 'PDF, EPS, AI',
},
{
value: 'PC',
label: 'PDF, CDR',
},

{
value: 'PEC',
label: 'PDF, EPS, CDR',
},

{
value: 'PEAC',
label: 'PDF, EPS, AI, CDR',
},
{
value: 'OT',
label: 'OTHERS',
},

];

// DIGITIZING
const FinalformatDigi = [
{
value: 'DP',
label: 'DST, PDF',
},
{
value: 'DPE',
label: 'DST, PDF, EMB',
},
{
value: 'DPP',
label: 'DST, PDF, PXF',
},
{
value: 'DPCE',
label: 'DST, PDF, CND, EXP',
},

{
value: 'PEC',
label: 'DST, PDF, CND, EXP, EMB',
},

];



const Width = [
{
value: '1',
label: '1',
},

{
value: '1.25',
label: '1.25 ',
},
{
value: '1.5',
label: '1.5 ',
},

{
value: '1.75',
label: '1.75',
},
{
value: '2',
label: '2',
},


{
value: '2.25',
label: '2.25 ',
},
{
value: '2.5',
label: '2.5 ',
},

{
value: '2.75',
label: '2.75',
},

{
value: '3',
label: '3',
},


{
value: '3.25',
label: '3.25 ',
},
{
value: '3.5',
label: '3.5 ',
},

{
value: '3.75',
label: '3.75',
},

{
value: '4',
label: '4',
},


{
value: '4.25',
label: '4.25 ',
},
{
value: '4.5',
label: '4.5 ',
},

{
value: '4.75',
label: '4.75',
},

{
value: '5.25',
label: '5.25 ',
},
{
value: '5.5',
label: '5.5 ',
},

{
value: '5.75',
label: '5.75',
},

];

const Height = [
{
value: '1',
label: '1',
},

{
value: '1.25',
label: '1.25 ',
},
{
value: '1.5',
label: '1.5 ',
},

{
value: '1.75',
label: '1.75',
},
{
value: '2',
label: '2',
},


{
value: '2.25',
label: '2.25 ',
},
{
value: '2.5',
label: '2.5 ',
},

{
value: '2.75',
label: '2.75',
},

{
value: '3',
label: '3',
},


{
value: '3.25',
label: '3.25 ',
},
{
value: '3.5',
label: '3.5 ',
},

{
value: '3.75',
label: '3.75',
},

{
value: '4',
label: '4',
},


{
value: '4.25',
label: '4.25 ',
},
{
value: '4.5',
label: '4.5 ',
},

{
value: '4.75',
label: '4.75',
},

{
value: '5.25',
label: '5.25 ',
},
{
value: '5.5',
label: '5.5 ',
},

{
value: '5.75',
label: '5.75',
},

];





function RequestquoteDialog({ open, handleClose, member }) {
let initialValues = {
name: member?.name || "",
designname: member?.designname || "",
fabric: member?.fabric || "",
PreferablefontStyle: member?.PreferablefontStyle || "",
ageGroupaudience: member?.ageGroupaudience || "",
};




const handleFormSubmit = async (values) => {
let { id } = values;

if (id)
await updateUser(values);
else
await addNewUser({ id: generateRandomId(), ...values });

handleClose();
};

return (
<Dialog onClose={handleClose} open={open}>
  <Box p={3}>
    <H4 sx={{ mb: "20px" }}>Request a Quote</H4>

    <Formik onSubmit={handleFormSubmit} initialValues={initialValues} validationSchema={validationSchema}>
      {({ values, errors, touched, handleChange, handleSubmit, handleBlur }) => {
      return (
      <form onSubmit={handleSubmit}>
        <Grid sx={{ mb: "16px" }} container spacing={4}>
          <Grid item sm={6} xs={12}>

            <TextField id="outlined-select-Service-Type" fullWidth select label="Service Type" defaultValue="VA" helperText="Please select Service Type">
              {ServiceTypes.map((option) => (
              <MenuItem key={option.value} value={option.value}>
              {option.label}
              </MenuItem>
              ))}
            </TextField>



            <TextField fullWidth type="text" name="designname" label="Design Name" onBlur={handleBlur} value={values.designname} onChange={handleChange} helperText="Please Enter Design Name" error={Boolean(errors.designname && touched.designname)} />

            <TextField id="outlined-select-Priority" fullWidth select label="Priority" defaultValue="NM" helperText="Please select Priority">
              {PriorityType.map((option) => (
              <MenuItem key={option.value} value={option.value}>
              {option.label}
              </MenuItem>
              ))}
            </TextField>


            <TextField id="outlined-select-Number-of-sides" fullWidth select label="Number of sides" defaultValue="Front" helperText="Please select Number of Sides">
              {Numberofsides.map((option) => (
              <MenuItem key={option.value} value={option.value}>
              {option.label}
              </MenuItem>
              ))}
            </TextField>


            <TextField id="outlined-select-Preferable-layout" fullWidth select label="Preferable Layout" defaultValue="Vertical" helperText="Please select Preferable Layout">
              {Preferablelayout.map((option) => (
              <MenuItem key={option.value} value={option.value}>
              {option.label}
              </MenuItem>
              ))}
            </TextField>


            <TextField id="outlined-select-Color-mode" fullWidth select label="Color Mode" defaultValue="CMYK" helperText="Please select Color Mode">
              {Colormode.map((option) => (
              <MenuItem key={option.value} value={option.value}>
              {option.label}
              </MenuItem>
              ))}
            </TextField>

            <TextField id="outlined-select-Number-Of-pages" fullWidth select label="Number of Pages" defaultValue="ONE" helperText="Please select Number of Pages">
              {Numberofpages.map((option) => (
              <MenuItem key={option.value} value={option.value}>
              {option.label}
              </MenuItem>
              ))}
            </TextField>
             

            <TextField id="outlined-select-Preferable-Colors" fullWidth select label="Preferable Colors" defaultValue="ONE" helperText="Please select Preferable Colors">
              {PreferableColors.map((option) => (
              <MenuItem key={option.value} value={option.value}>
              {option.label}
              </MenuItem>
              ))}
            </TextField>



            <TextField id="outlined-select-Preferable-Shapes" fullWidth select label="Preferable Shapes" defaultValue="ONE" helperText="Please select Preferable Shapes">
              {PreferableShapes.map((option) => (
              <MenuItem key={option.value} value={option.value}>
              {option.label}
              </MenuItem>
              ))}
            </TextField>


            <TextField fullWidth type="text" name="PreferablefontStyle" label="Preferable FontStyle" onBlur={handleBlur} value={values.PreferablefontStyle} onChange={handleChange} helperText="Please Enter Preferable FontStyle" error={Boolean(errors.PreferablefontStyle && touched.PreferablefontStyle)} />


            <TextField fullWidth type="text" name="ageGroupaudience	" label="Age Group/Audience	" onBlur={handleBlur} value={values.ageGroupaudience} onChange={handleChange} helperText="Please Enter Age Group/Audience	" error={Boolean(errors.ageGroupaudience && touched.ageGroupaudience)} />

          </Grid>

          <Grid item sm={6} xs={12}>

            <TextField id="outlined-select-Process-Type" fullWidth select label="Process Type" defaultValue="SC" helperText="Please select Process Type">
              {ProcessType.map((option) => (
              <MenuItem key={option.value} value={option.value}>
              {option.label}
              </MenuItem>
              ))}
            </TextField>


            <TextField id="outlined-select-Number-Of-colors" fullWidth select label="Number of Colors" defaultValue="ONE" helperText="Please select Number of Colors">
              {Numberofcolor.map((option) => (
              <MenuItem key={option.value} value={option.value}>
              {option.label}
              </MenuItem>
              ))}
            </TextField>

            <TextField id="outlined-select-Final-files-format" fullWidth select label="Final files format" defaultValue="PA" helperText="Please select Final files format">
              {FinalformatVector.map((option) => (
              <MenuItem key={option.value} value={option.value}>
              {option.label}
              </MenuItem>
              ))}
            </TextField>




            <TextField id="outlined-select-Width" fullWidth select label="Width" defaultValue="1" helperText="Please select Width">
              {Width.map((option) => (
              <MenuItem key={option.value} value={option.value}>
              {option.label}
              </MenuItem>
              ))}
            </TextField>

            <TextField id="outlined-select-Height" fullWidth select label="Height" defaultValue="1" helperText="Please select Height">
              {Height.map((option) => (
              <MenuItem key={option.value} value={option.value}>
              {option.label}
              </MenuItem>
              ))}
            </TextField>





            <InputLabel htmlFor="grouped-native-select">Grouping</InputLabel>
            <Select native defaultValue="" id="grouped-native-select" label="Grouping" fullWidth>
              <option aria-label="None" value="" />
              <optgroup label="CAP">

                <option value={1}>Front Of Cap</option>
                <option value={2}>Back Of Cap</option>
                <option value={1}>Side Of Cap</option>
                <option value={2}>Visor</option>
                <option value={2}>Beenie Cap</option>
              </optgroup>

              <optgroup label="TOWEL">

                <option value={3}>Towel</option>
              </optgroup>

              <optgroup label="BAGS">

                <option value={3}>Bags</option>

              </optgroup>

              <optgroup label="POLO">

                <option value={1}>Left Chest</option>
                <option value={2}>Sleeve</option>
                <option value={1}>Pocket</option>
                <option value={2}>Full Back</option>
                <option value={2}>Full Front</option>
                <option value={2}>Back Yoke</option>

              </optgroup>

              <optgroup label="OTHERS">

                <option value={3}>Others</option>
              </optgroup>
            </Select>




            <FormControlLabel sx={{ my: "20px" }} label="Active Customer" control={<Switch name="isActive" checked={values.isActive} onChange={handleChange} />} />
          </Grid>
        </Grid>

        <Stack direction="row" spacing={2}>
          <Button variant="contained" color="primary" type="submit">
            Save
          </Button>

          <Button variant="outlined" color="secondary" onClick={()=> handleClose()}>
            Cancel
          </Button>
        </Stack>
      </form>
      );
      } }
    </Formik>
  </Box>
</Dialog>
);
}

export default RequestquoteDialog;