import React, { useRef, useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Link,
  List,
  ListItem,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import Collapse, { CollapseProps } from "@mui/material/Collapse";
import MenuIcon from "@mui/icons-material/Menu";
import Assets from "../../assets";
import MenuListItems from "./Menu";
import styles from "./navigation.module.scss";
import OutsideClickHandler from "react-outside-click-handler";

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
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [open, setOpen] = useState(false); // State for mobile menu collapse

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMobileMenu = () => {
    setOpen(!open); // Toggle mobile menu visibility
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
          <MenuListItems name={item.name} children={item.content} />
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
          {/* Desktop navigation */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex", alignItems: "center" },
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
                background: "whitesmoke",
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

          {/*=============Mobile navigation==============  */}
          <Box
            sx={{
              right: 0,
              display: { xs: "flex", md: "none" },
            }}
          >
            <IconButton
              size="medium"
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
        {/* <OutsideClickHandler
          children={
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
          }
          onOutsideClick={() => setOpen(false)}
        /> */}
      </Container>
    </AppBar>
  );
};
export default Navigation;
