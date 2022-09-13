/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import { createStyles, makeStyles } from "@mui/styles";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      "& .MuiFormLabel-root": {
        color: "rgb(165, 165, 165)",
      },
    },
    multilineColor: {
      color: "white",
    },
  })
);
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

const Form = () => {
  const classes = useStyles();
  const theme = useTheme();

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
    <Box>
      <Box
        padding={{ xs: 3, sm: 3 }}
        width={1}
        component={Card}
        boxShadow={1}
        marginBottom={4}
        backgroundColor="rgb(43, 45, 46)"
      >
        <Grid container spacing={2} sx={{ marginBottom: "20px" }}>
          <Grid item xs={12}>
            <Typography
              sx={{
                fontSize: "14px",
                color: "rgb(215, 215, 215)",
              }}
            >
              REQUEST A CALL BACK
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              sx={{
                fontSize: "33px",
                color: "rgb(215, 215, 215)",
                lineHeight: 1.2,
              }}
            >
              We are always ahead Professional Solutions for Your
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              sx={{
                fontSize: "21px",
                color: " rgb(185, 185, 185)",
                lineHeight: 1.2,
                fontFamily: "Open Sans",
                lineHeight: 1.296,
              }}
            >
              if you need any help, please contact us or send us an email or go
              to our forum.
            </Typography>
          </Grid>
        </Grid>
        <form noValidate autoComplete="off" onSubmit={formik.handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                className={classes.root}
                sx={{
                  height: 54,
                  backgroundColor: "rgb(66, 67, 68)",
                  borderRadius: " 5px",
                }}
                InputProps={{
                  className: classes.multilineColor,
                }}
                label="First name"
                variant="outlined"
                // color="primary"
                size="medium"
                name="firstName"
                fullWidth
                value={formik.values.firstName}
                onChange={formik.handleChange}
                error={
                  formik.touched.firstName && Boolean(formik.errors.firstName)
                }
                helperText={formik.touched.firstName && formik.errors.firstName}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                className={classes.root}
                sx={{
                  height: 54,
                  backgroundColor: "rgb(66, 67, 68)",
                  borderRadius: " 5px",
                }}
                InputProps={{
                  className: classes.multilineColor,
                }}
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
                className={classes.root}
                sx={{
                  height: 54,
                  backgroundColor: "rgb(66, 67, 68)",
                  borderRadius: " 5px",
                }}
                InputProps={{
                  className: classes.multilineColor,
                }}
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
                className={classes.root}
                sx={{
                  backgroundColor: "rgb(66, 67, 68)",
                  borderRadius: " 5px",
                }}
                InputProps={{
                  className: classes.multilineColor,
                }}
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
                error={formik.touched.message && Boolean(formik.errors.message)}
                helperText={formik.touched.message && formik.errors.message}
              />
            </Grid>
            <Grid item container justifyContent={"start"} xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="secondary"
                style={{ borderRadius: 50 }}
              >
                <Typography
                  sx={{
                    fontSize: "16px",
                    textAlign: "center",
                    lineHeight: "1.5",
                  }}
                >
                  Send to us
                </Typography>
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
      <Box>
        <Typography color="text.secondary" align={"center"}>
          We'll get back to you in 1-2 business days.
        </Typography>
      </Box>
    </Box>
  );
};

export default Form;
