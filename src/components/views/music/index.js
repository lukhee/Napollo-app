import React from "react";
import { Typography } from "@material-ui/core";
import MoodIcon from "@material-ui/icons/Mood";

const Music = () => {
  return (
    <div
      style={{ textAlign: "center", fontWeight: "Bold", paddingTop: "100px" }}
    >
        <MoodIcon fontSize="large" style={{color: 'red'}} />
      <h2 style={{color: 'green'}}> See You soon!!!
      </h2>
      <Typography>
        kindly be patient with us, the named app is still under construction
      </Typography>
    </div>
  );
};

export default Music;
