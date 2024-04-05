import React from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Link,
  MenuItem,
  Toolbar,
  Typography,
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
              <MenuList
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

          {/*=============RESPONSIVE==============  */}
          <Box
            sx={{
              right: 0,
              display: { xs: "flex", md: "none" },
            }}
          >
            <IconButton
              size="medium"
              onClick={handleClick}
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
      </Container>
    </AppBar>
  );
};
export default Navigation;
