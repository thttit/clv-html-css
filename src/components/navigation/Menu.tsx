import { Box, Link, Typography, Tooltip, List, ListItem } from "@mui/material";
import { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { styled } from "@mui/material/styles";
import styles from "./navigation.module.scss";

const UITooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#03204c",
    boxShadow: theme.shadows[1],
    border: "1px solid whitesmoke",
    borderRadius: 0,
    width: "auto",
  },
}));
const MenuList = ({ name, children }: any) => {
  return (
    <UITooltip
      children={
        <Box display={"flex"} justifyContent={"space-between"}>
          <Typography
            className={styles.text}
            fontSize={"16px"}
            fontWeight={"bold"}
          >
            {name}
          </Typography>
          <KeyboardArrowDownIcon className={styles.text} />
        </Box>
      }
      title={
        <List>
          <ListItem>
            <Link>
              <Typography
                className={styles.text}
                fontSize={"14px"}
                fontWeight={"bold"}
              >
                Overview
              </Typography>
            </Link>
          </ListItem>
          <Box p={1}>
            {children.map((page: any) => (
              <ListItem key={page}>
                <Link sx={{ textDecoration: "none !important" }}>
                  <Typography className={styles.text} fontSize={"14px"}>
                    {page}
                  </Typography>
                </Link>
              </ListItem>
            ))}
          </Box>
        </List>
      }
    />
  );
};

export default MenuList;
