import * as React from "react";
import { Link } from "react-router-dom";
import { Card,  CardMedia, Button, CardActions } from "@mui/material";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import { Grid } from "@mui/material";
import DefOnly from "../assets/images/DefOnly.png";

const HomeTimeline = () => {
  return (
    <div className="home-time" id="home-time">
        <style>
            {`
            @media (max-width: 768px) {
  .card {
    max-width: 90%;  /* Allow card to take more space on smaller screens */
  }

  img {
    max-width: 100%; /* Make image responsive */
    height: auto;    /* Keep image proportions */
  }
}
`}
        </style>
<Timeline position="alternate">
  <TimelineItem>
    <TimelineOppositeContent color="text.secondary">
      <Grid container justifyContent="flex-end">
        <img
          src={DefOnly}
          alt="def"
          className="rounded shadow"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </Grid>
    </TimelineOppositeContent>

    <TimelineSeparator>
      <TimelineDot />
      <TimelineConnector />
    </TimelineSeparator>
    
    <TimelineContent>
      <Grid container justifyContent="flex-start">
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="DefOnly.png" 
      />
    
      <CardActions>
        <Link to='/'>
        <Button size="small">Share</Button>
        </Link>
        <Link to='/'>
        <Button size="small">Learn More</Button>
        </Link>
      </CardActions>
    </Card>
      </Grid>
    </TimelineContent>
  </TimelineItem>

  {/* Repeat similar structure for other TimelineItems */}
</Timeline>

    </div>
  );
};

export default HomeTimeline;
