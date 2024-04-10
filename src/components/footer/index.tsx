import {
  Box,
  Container,
  Divider,
  Grid,
  IconButton,
  Link,
  Typography,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <Box mt={6}>
      <Divider />
      <Container maxWidth="xl">
        <Grid
          container
          p={6}
          alignItems={"center"}
          flexDirection={{
            xs: "column-reverse",
            sm: "row",
          }}
        >
          <Grid item xs={12} sm={6}>
            <Link href="https://www.facebook.com/cyberlogitecvietnam">
              <IconButton className={styles.linkText}>
                <FacebookIcon sx={{ fontSize: "48px" }} />
              </IconButton>
            </Link>
            <Link href="https://www.youtube.com/@cyberlogitecvietnam3023">
              <IconButton className={styles.iconYoutube}>
                <YouTubeIcon sx={{ fontSize: "48px" }} />
              </IconButton>
            </Link>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            display={"flex"}
            justifyContent={"flex-end"}
            gap={2}
          >
            <Link
              href="https://www.cyberlogitec.com.vn/contact"
              sx={{ textDecoration: "none !important" }}
            >
              <Typography
                className={styles.linkText}
                variant="subtitle1"
                fontWeight={"bold"}
              >
                CONTACT US
              </Typography>
            </Link>
            <Link
              href="https://www.cyberlogitec.com.vn/careers/experienced-hire"
              sx={{ textDecoration: "none !important" }}
            >
              <Typography
                className={styles.linkText}
                variant="subtitle1"
                fontWeight={"bold"}
              >
                JOIN US
              </Typography>
            </Link>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
export default Footer;
