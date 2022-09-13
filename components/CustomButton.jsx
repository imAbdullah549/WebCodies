import React from "react";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
function CustomButton({ title }) {
  return (
    <Button variant="contained" color="secondary" style={{ borderRadius: 50 }}>
      <Typography
        sx={{
          fontSize: "16px",
          textAlign: "center",
          lineHeight: "1.5",
        }}
      >
        {title}
      </Typography>
    </Button>
  );
}
export default CustomButton;
