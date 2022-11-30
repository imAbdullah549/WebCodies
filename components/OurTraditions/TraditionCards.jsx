import React from "react";
import { Typography, Box, Grid, Item, Divider } from "@mui/material";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
const TraditionCards = ({ icon, heading, content }) => {
  return (
    <Box
      sx={{ padding: { xs: "20px 5px 20px 5px", sm: "35px 20px 35px 5px" } }}
    >
      <Grid container spacing={2.5}>
        <Grid item xs={2}>
          {icon}
        </Grid>
        <Grid item xs={10}>
          <Typography
            gutterBottom
            sx={{
              fontSize: "22px",
              textAlign: "left",
              lineHeight: 1.2,
              fontWeight: "500",
              color: "rgb(48, 48, 48)",
            }}
          >
            {heading}
          </Typography>

          <Divider sx={{ marginBottom: "0.35em" }} />
          <Typography variant="body2" color="text.secondary">
            {content}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};
export default TraditionCards;
