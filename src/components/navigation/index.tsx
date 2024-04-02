import React, { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Link,
  Menu,
  MenuItem,
  SwipeableDrawer,
  Toolbar,
  Tooltip,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Drawer,
  Collapse,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Assets from "../../assets";
import MenuList from "./Menu";
import styles from "./navigation.module.scss";

const listItems = [
  {
    name: "Solutions",
    content: ["Forwarding", "Container Tracking", "Shipping", "Factory"],
  },
  {
    name: "Services",
    content: [
      "Software Development",
      "Quality Assurance",
      "Global Service Desk",
    ],
  },
  {
    name: "Careers",
    content: ["Experienced Hire", "Fresher Training Program"],
  },
];
const Navigation = () => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };
  const handleClick = () => {
    setOpen(!open);
  };
  const list = () => (
    <Box p={2}>
      <Typography
        mb={2}
        className={styles.text}
        fontSize={"16px"}
        fontWeight={"bold"}
      >
        About Us
      </Typography>
      {listItems.map((item) => (
        <Box key={item.name} mb={2}>
          <MenuList name={item.name} children={item.content} />
        </Box>
      ))}
    </Box>
  );

  return (
    <AppBar
      position="sticky"
      sx={{ backgroundColor: "#03204c", zIndex: 1, top: 0 }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ padding: 2, height: "100%" }}>
          {/* logo */}
          <Link sx={{ flexGrow: 1 }} href="/">
            <img alt="" src={Assets.logo} />
          </Link>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex", alignItems: "center" },
              gap: 2,
            }}
          >
            {listItems.map((item) => (
              <MenuList name={item.name} children={item.content} />
            ))}
            <MenuItem>
              <Typography
                fontWeight={"bold"}
                fontSize={"16px"}
                className={styles.text}
              >
                About Us
              </Typography>
            </MenuItem>
          </Box>
          <Link
            href="/"
            sx={{
              flexGrow: 0,
              display: { xs: "none", md: "flex" },
              textDecoration: "none",
            }}
          >
            <Button
              variant="contained"
              sx={{
                backgroundColor: "whitesmoke",
                color: "#03204c",
                fontSize: "14px",
                borderRadius: "8px",
                fontWeight: "bold",
                textTransform: "none",
              }}
            >
              Contact Us
            </Button>
          </Link>

          {/*=============RESPONSIVE==============  */}
          <Box
            sx={{
              right: 0,
              display: { xs: "flex", md: "none" },
            }}
          >
            <IconButton size="large" onClick={handleClick} color="inherit">
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
        <Collapse
          sx={{
            p: 1,
            width: "100%",
            display: { xs: "flex", md: "none" },
          }}
          in={open}
          timeout="auto"
          unmountOnExit
        >
          <Link
            href="/"
            sx={{
              flexGrow: 0,
              textDecoration: "none",
            }}
          >
            <Button
              variant="contained"
              sx={{
                backgroundColor: "rgb(59 196 226)",
                color: "whitesmoke",
                fontSize: "14px",
                borderRadius: "8px",
                fontWeight: "bold",
                textTransform: "none",
                mb: 2,
              }}
            >
              Contact Us
            </Button>
          </Link>
          {list()}
        </Collapse>
      </Container>
    </AppBar>
  );
};
export default Navigation;
