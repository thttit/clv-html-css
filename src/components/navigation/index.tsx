import React, { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  Link,
  List,
  ListItem,
  makeStyles,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Assets from "../../assets";
import MenuListItems from "./Menu";
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
  const theme = useTheme();
  const [open, setOpen] = useState(false); // State for mobile menu collapse

  const handleMobileMenu = () => {
    setOpen(!open);
  };

  const list = () => (
    <Box>
      <List sx={{ mt: 10, p: 3 }}>
        <ListItem sx={{ p: 0, mb: 2 }}>
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
              }}
            >
              Contact Us
            </Button>
          </Link>
        </ListItem>
        <ListItem sx={{ p: 0, mb: 2 }}>
          <Typography
            fontWeight={"bold"}
            fontSize={"14px"}
            className={styles.text}
          >
            About Us
          </Typography>
        </ListItem>
        {listItems.map((item) => (
          <Box key={item.name} mb={2}>
            <MenuListItems name={item.name} children={item.content} />
          </Box>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex", pb: 10 }}>
      <AppBar
        component="nav"
        position="fixed"
        sx={{
          backgroundColor: "#03204c",
          zIndex: theme.zIndex.drawer + 1,
          top: 0,
        }}
      >
        <Toolbar sx={{ padding: 2, height: "100%" }}>
          <Link sx={{ flexGrow: 1 }} href="/">
            <img
              alt="CyberLogitec logo"
              src={Assets.logo}
              className={styles.logo}
            />
          </Link>
          {/*=============Desktop navigation============= */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "flex", alignItems: "center" },
              gap: 2,
            }}
          >
            {listItems.map((item) => (
              <MenuListItems
                key={item.name}
                name={item.name}
                children={item.content}
              />
            ))}
            <Typography
              fontWeight={"bold"}
              fontSize={"14px"}
              className={styles.text}
            >
              About Us
            </Typography>
          </Box>
          <Link
            href="/"
            sx={{
              display: { xs: "none", sm: "flex" },
              textDecoration: "none",
            }}
          >
            <Button
              variant="contained"
              sx={{
                background: "whitesmoke",
                color: "#03204c",
                fontSize: "12px",
                borderRadius: "8px",
                fontWeight: "bold",
                textTransform: "none",
              }}
            >
              Contact Us
            </Button>
          </Link>

          {/*=============Mobile navigation==============  */}
          <Box
            sx={{
              right: 0,
              display: { xs: "flex", sm: "none" },
            }}
          >
            <IconButton
              size="medium"
              aria-label="open drawer"
              edge="end"
              onClick={handleMobileMenu}
              color="inherit"
              sx={{
                backgroundColor: open ? "rgba(55, 65, 81, 0.8)" : "transparent",
                outline: open ? "2px solid transparent" : "none",
                outlineOffset: "2px",
                borderRadius: "8px",
                transform: open ? "rotate(90deg)" : "rotate(0deg)",
                transition: "transform 0.2s ease-in-out",
              }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="temporary"
        anchor="top"
        open={open}
        onClose={handleMobileMenu}
        ModalProps={{
          keepMounted: true, // Better performance on mobile
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            backgroundColor: "#03204c",
            width: "100%",
            boxSizing: "border-box",
            height: "auto",
          },
        }}
      >
        {list()}
      </Drawer>
    </Box>
  );
};
export default Navigation;
