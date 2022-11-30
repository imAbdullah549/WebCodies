import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Image from "next/image";
import Logo from "../asset/Logo.png";
const drawerWidth = 240;
const navItems = [
  { title: "About Us", link: "/aboutus" },
  { title: "Portfolio", link: "/portfolio" },
  { title: "Contact Us", link: "/contactus" },
];

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Button
        href={"/"}
        sx={{
          color: "#000000",
          marginRight: "40px",
          marginLeft: "40px",
        }}
      >
        <Image src={Logo} alt="WC" width="67px" height="40px" quality={100} />
      </Button>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.title} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar component="nav" position="static">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Button
            href={"/"}
            sx={{
              color: "#000000",
              marginRight: "40px",
              marginLeft: "40px",
              display: { xs: "none", sm: "block" },
            }}
          >
            <Image
              src={Logo}
              alt="WC"
              width="67px"
              height="40px"
              quality={100}
            />
          </Button>
          <Box sx={{ display: { xs: "none", sm: "block" }, flexGrow: 1 }}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              {navItems.map((item, index) => (
                <>
                  {index != 0 ? (
                    <Typography
                      key={index}
                      variant="h6"
                      component="div"
                      // sx={{ display: { xs: "none", sm: "block" } }}
                    >
                      {"-"}
                    </Typography>
                  ) : null}

                  <Button
                    key={index}
                    href={item.link}
                    sx={{
                      color: "#000000",
                      marginRight: "40px",
                      marginLeft: "40px",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "17px",
                        fontFamily: "Poppins",
                        color: "rgb(48, 48, 48)",
                      }}
                      // sx={{ display: { xs: "none", sm: "block" } }}
                    >
                      {item.title}
                    </Typography>
                  </Button>
                </>
              ))}
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

Navbar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Navbar;
