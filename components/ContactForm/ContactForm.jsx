/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import { Container } from "@mui/material";

const validationSchema = yup.object({
  firstName: yup
    .string()
    .trim()
    .min(2, "Please enter a valid name")
    .max(50, "Please enter a valid name")
    .required("Please specify your first name"),
  lastName: yup
    .string()
    .trim()
    .min(2, "Please enter a valid name")
    .max(50, "Please enter a valid name")
    .required("Please specify your last name"),
  email: yup
    .string()
    .trim()
    .email("Please enter a valid email address")
    .required("Email is required."),
  message: yup.string().trim().required("Please specify your message"),
});

const ContactForm = () => {
  const theme = useTheme();

  const LeftSide = () => {
    const initialValues = {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    };

    const onSubmit = (values) => {
      return values;
    };

    const formik = useFormik({
      initialValues,
      validationSchema: validationSchema,
      onSubmit,
    });

    return (
      <Box sx={{ marginTop: { xs: "20px", sm: "0px" }, overflow: "hidden" }}>
        <Box marginBottom={4} data-aos="fade-right">
          <Typography
            variant={"h3"}
            sx={{ fontWeight: 700, fontSize: { xs: "30px", sm: "35px" } }}
            gutterBottom
          >
            Contact us
          </Typography>
          <Typography
            color="text.secondary"
            sx={{ fontSize: { xs: "16px", sm: "21px" } }}
          >
            Rather than worrying about switching offices every couple years, you
            can instead stay in the same location and grow-up from your shared
            coworking space to an office that takes up an entire floor.
          </Typography>
        </Box>
        <Box data-aos="fade-left">
          <form noValidate onSubmit={formik.handleSubmit}>
            <Grid container spacing={4}>
              <Grid item xs={12} sm={6}>
                <TextField
                  sx={{ height: 54 }}
                  label="First name"
                  variant="outlined"
                  color="primary"
                  size="medium"
                  name="firstName"
                  fullWidth
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.firstName && Boolean(formik.errors.firstName)
                  }
                  helperText={
                    formik.touched.firstName && formik.errors.firstName
                  }
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  sx={{ height: 54 }}
                  label="Last name"
                  variant="outlined"
                  color="primary"
                  size="medium"
                  name="lastName"
                  fullWidth
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.lastName && Boolean(formik.errors.lastName)
                  }
                  helperText={formik.touched.lastName && formik.errors.lastName}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  sx={{ height: 54 }}
                  label="Email"
                  type="email"
                  variant="outlined"
                  color="primary"
                  size="medium"
                  name="email"
                  fullWidth
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Message"
                  multiline
                  rows={6}
                  variant="outlined"
                  color="primary"
                  size="medium"
                  name="message"
                  fullWidth
                  value={formik.values.message}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.message && Boolean(formik.errors.message)
                  }
                  helperText={formik.touched.message && formik.errors.message}
                />
              </Grid>
              <Grid item xs={12}>
                {/* sx={{ height: 54, minWidth: 150 }} */}
                <Button
                  variant="contained"
                  color="secondary"
                  style={{ borderRadius: 50 }}
                  type="submit"
                >
                  <Typography
                    sx={{
                      fontSize: "16px",
                      textAlign: "center",
                      lineHeight: "1.5",
                    }}
                  >
                    Submit
                  </Typography>
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Typography
                  color="text.secondary"
                  sx={{ fontSize: { xs: "16px", sm: "21px" } }}
                >
                  We'll get back to you in 1-2 business days.
                </Typography>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Box>
    );
  };

  const RightSide = () => {
    return (
      <iframe
        width="100%"
        height="100%"
        frameBorder="0"
        title="map"
        marginHeight={0}
        marginWidth={0}
        scrolling="no"
        src="https://maps.google.com/maps?width=100%&height=100%&hl=en&q=Milan&ie=UTF8&t=&z=14&iwloc=B&output=embed"
        style={{
          minHeight: 300,
          filter:
            theme.palette.mode === "dark"
              ? "grayscale(0.5) opacity(0.7)"
              : "none",
        }}
      />
    );
  };

  return (
    <Box
      sx={{
        width: 1,
        height: 1,
        overflow: "hidden",
      }}
    >
      <Container paddingX={0} paddingY={0} maxWidth={{ sm: 1, md: 1236 }}>
        <Box
          display={"flex"}
          flexDirection={{ xs: "column", md: "row" }}
          position={"relative"}
        >
          <Box
            display={"flex"}
            alignItems={"center"}
            width={1}
            order={{ xs: 2, md: 1 }}
          >
            <Container>
              <LeftSide />
            </Container>
          </Box>
          <Box
            sx={{
              flex: { xs: "0 0 100%", md: "0 0 50%" },
              position: "relative",
              maxWidth: { xs: "100%", md: "50%" },
              minHeight: { xs: 300, md: 600 },
              order: { xs: 1, md: 2 },
            }}
          >
            <Box
              sx={{
                width: { xs: 1, md: "50vw" },
                height: "100%",
                position: "relative",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  overflow: "hidden",
                }}
              >
                <Box
                  sx={{
                    overflow: "hidden",
                    left: "0%",
                    width: 1,
                    height: 1,
                    position: { xs: "relative", md: "absolute" },
                  }}
                >
                  <RightSide />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
      <Divider />
    </Box>
  );
};

export default ContactForm;
