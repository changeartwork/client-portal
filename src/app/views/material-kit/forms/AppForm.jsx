import { Box, Stack, styled } from "@mui/material";
import { Breadcrumb, SimpleCard } from "app/components";
import SimpleForm from "./SimpleForm";
import StepperForm from "./StepperForm";

const Container = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: { marginBottom: "16px" },
  },
}));

const AppForm = () => {
  return (
    <Container>
      <Box className="breadcrumb">
        <Breadcrumb routeSegments={[{ name: "Material", path: "/cpdev/material" }, { name: "Form" }]} />
      </Box>

      <Stack spacing={3}>
        <SimpleCard title="Simple Form">
          <SimpleForm />
        </SimpleCard>

        <SimpleCard title="stepper form">
          <StepperForm />
        </SimpleCard>
      </Stack>
    </Container>
  );
};

export default AppForm;
