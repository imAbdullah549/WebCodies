import React from "react";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { motion } from "framer-motion";
function CustomButton({ title }) {
  return (
    <Button
      variant="contained"
      color="secondary"
      style={{ borderRadius: 50 }}
      component={motion.div}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 17,
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
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
