import {
  Card,
  CardContent,
  CardHeader,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import ReactPlayer from "react-player";
import ListItem from "./ListItem";

const HomePage = () => {
  return (
    <Container maxWidth="lg">
      <Grid container mt={10} spacing={2}>
        <Grid item xs={12} md={6}>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=lkfI3cpjsII"
            width={"100%"}
            playing={true}
            loop={true}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Card variant="outlined" sx={{ border: "none !important" }}>
            <CardContent>
              <Typography fontSize={{ xs: "30px", md: "48px" }}>
                Create a Global Support Hub with
              </Typography>
              <Typography
                fontSize={{ xs: "30px", md: "48px" }}
                sx={{
                  color: "rgb(59 196 226)",
                }}
              >
                Global Service Desk
              </Typography>
              <Typography fontSize={{ xs: "14px", md: "18px" }}>
                We play the roles as the support frontiers and the
                representatives of the IT support. The Global Service Desk is
                the center where customers (e.g. employees or other
                stakeholders) can approach for help from their IT service
                providers. Regardless of whatever the assistance is being
                provided, the goal of our Global Service Desk is to deliver
                high-quality service to customers in the timely manner.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <ListItem />
        <Grid item xs={12} textAlign={{ xs: "center", md: "left" }}>
          <Typography mb={1} variant="h6" color={"primary"}>
            Previous page
          </Typography>
          <Typography variant="h3" color="rgb(59 196 226)">
            Quality Assurance
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};
export default HomePage;
