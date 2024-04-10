import {
  Box,
  Link,
  Typography,
  Tooltip,
  List,
  ListItem,
  Menu,
  MenuItem,
} from "@mui/material";
import { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { styled, useTheme } from "@mui/material/styles";
import styles from "./navigation.module.scss";
import { useState } from "react";
import { useMediaQuery } from "@mui/material";

const MenuListItems = ({ name, children }: any) => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget); // Set menu anchor on click
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const StyledMenu = styled(Menu)(({ theme }) => ({
    [`& .MuiMenu-paper`]: {
      backgroundColor: theme.palette.primary.main,
      boxShadow: theme.shadows[1],
      border: "1px solid whitesmoke",
      borderRadius: 0,
      // width: mobile ? "100%" : "auto",
    },
  }));
  return (
    <>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        id="basic-button"
        aria-controls={anchorEl ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={anchorEl ? "true" : undefined}
        onClick={handleClick}
        onMouseEnter={handleClick}
      >
        <Typography
          className={styles.text}
          fontSize={"14px"}
          fontWeight={"bold"}
        >
          {name}
        </Typography>
        <KeyboardArrowDownIcon className={styles.text} />
      </Box>
      <StyledMenu
        id="basic-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        sx={{
          "&.MuiMenu-paper": {
            border: "1px solid whitesmoke",
            borderRadius: 0,
          },
        }}
      >
        <MenuItem onClick={handleClose}>
          <Link>
            <Typography
              className={styles.text}
              fontSize={"14px"}
              fontWeight={"bold"}
            >
              Overview
            </Typography>
          </Link>
        </MenuItem>
        <Box p={1}>
          {children.map((page: any) => (
            <MenuItem key={page} onClick={handleClose}>
              <Link sx={{ textDecoration: "none !important" }}>
                <Typography className={styles.text} fontSize={"14px"}>
                  {page}
                </Typography>
              </Link>
            </MenuItem>
          ))}
        </Box>
      </StyledMenu>
    </>
  );
};

export default MenuListItems;
