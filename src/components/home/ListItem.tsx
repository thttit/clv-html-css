import React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Paper,
  Typography,
} from "@mui/material";

const getColorByIndex = (index: number) =>
  index % 2 === 0 ? "#03204c" : "#f5f5f5";

const getColorTextByIndex = (index: number) =>
  index % 2 === 0 ? "whitesmoke" : "rgba(0,0,0,.85)";
const getBorderByIndex = (index: number) =>
  index % 2 === 0 ? "none" : "1px solid #ddd";

const items = [
  {
    icon: "https://www.cyberlogitec.com.vn/_next/image?url=%2Fstatic%2Fimages%2Fservices%2Fvector1.png&w=64&q=75",
    title: "Customer’s Requirements Managed By Help Desk Software.",
    content:
      "Enable to provide quick and easy answers to help seekers. Makes it simple to organize, prioritize.    ",
  },
  {
    icon: "https://www.cyberlogitec.com.vn/_next/image?url=%2Fstatic%2Fimages%2Fservices%2Fvector2.png&w=96&q=75",
    title: "Deliver On SLAs",
    content:
      "Nail your Service Level Agreements, every time. Get the important things done first with prioritized queues.",
  },
  {
    icon: "https://www.cyberlogitec.com.vn/_next/image?url=%2Fstatic%2Fimages%2Fservices%2Fvector3.png&w=64&q=75",
    title: "Offer Self-Service",
    content:
      "Help customers help themselves, scale support with a limited staff. Save time and reduce tickets with an integrated knowledge base.",
  },
  {
    icon: "https://www.cyberlogitec.com.vn/_next/image?url=%2Fstatic%2Fimages%2Fservices%2Fvector4.png&w=64&q=75",
    title: "Automate Those Repetitive Tasks",
    content:
      "We always try to set up automations for the routine tasks so that we can focus on solving the important stuff and help lighten the workload.",
  },
  {
    icon: "https://www.cyberlogitec.com.vn/_next/image?url=%2Fstatic%2Fimages%2Fservices%2Fvector5.png&w=64&q=75",
    title: "Customer’s Requirements Tracked And Reported On Metrics",
    content:
      "We definitely keep an eye on key operational metrics like most IT organizations. But we’ve stopped obsessing over random KPIs, and we’re way more focused now on measuring what matters most. To summarize, we put the customer experience first, and spend our time drilling into the trends and numbers that can help us make the biggest improvements.",
  },
  {
    icon: "https://www.cyberlogitec.com.vn/_next/image?url=%2Fstatic%2Fimages%2Fservices%2Fvector6.png&w=64&q=75",
    title: "Up-To-Date Staff Training",
    content:
      "CLV helpdesk’s tool is always available with the up to date workaround, training materials, guideline document, FAQ from users… We had a clear plan to make sure all of helpdesk team members could have the easiest way to reach them in the fastest way when they need to.",
  },
];

const ListItem = () => {
  return (
    <Box textAlign={"center"} sx={{ flexGrow: 1, mt: 10, mb: 2 }}>
      <Typography fontSize={{ xs: "30px", md: "48px" }}>
        What <span style={{ color: "rgb(59 196 226)" }}>we can do</span>
      </Typography>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        p={2}
      >
        {items.map((item, index) => (
          <Grid item xs={4} sm={4} md={4} key={index}>
            <Card
              sx={{
                backgroundColor: getColorByIndex(index),
                padding: "20px",
                color: getColorTextByIndex(index),
                borderRadius: "20px",
                height: "100%",
                border: getBorderByIndex(index),
              }}
            >
              <img width={"60px"} height={"60px"} src={item.icon} alt="" />
              <CardContent sx={{ gap: 2, textAlign: "start" }}>
                <Typography mb={1} variant="h5" fontWeight={"bold"}>
                  {item.title}
                </Typography>
                <Typography variant="subtitle1">{item.content}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ListItem;
