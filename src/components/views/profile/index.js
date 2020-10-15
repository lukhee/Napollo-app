import React from "react";
import { Box, Grid, makeStyles, Typography, Button } from "@material-ui/core";
import { Settings as SettingIcon } from "@material-ui/icons";
import clsx from "clsx";
import ProfileTab from "./Tab";
import imgUrl from "../../general/imgs/artist1.jpg";

const artistInfo = {
  title: "Britanny Baker",
  location: "Califonia",
  likes: 356,
  name: "Farzana",
};

const profileData = [
  {
    id: 1,
    url: imgUrl,
    title: "Shape Of You",
    name: "Farzana",
    likes: 400,
  },
  {
    id: 2,
    url: imgUrl,
    title: "Shape Of You",
    name: "Farzana",
    likes: 400,
  },
  {
    id: 3,
    url: imgUrl,
    title: "Shape Of You",
    name: "Farzana",
    likes: 400,
  },
  {
    id: 4,
    url: imgUrl,
    title: "Shape Of You",
    name: "Farzana",
    likes: 400,
  },
  {
    id: 5,
    url: imgUrl,
    title: "Shape Of You",
    name: "Farzana",
    likes: 400,
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(1),
  },
  banner: {
    width: "100%",
    backgroundImage: `url(${imgUrl})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "355px",
    position: "relative",
  },
  profileImg: {
    width: "70px",
    height: "70px",
    borderRadius: "50%",
    border: "2px solid white",
    position: "relative",
    bottom: "-90%",
    left: "30px",
  },
  description: {
    width: "85%",
    float: "right",
    color: "grey",
    padding: theme.spacing(2),
    marginBottom: theme.spacing(3),
    [theme.breakpoints.down('sm')]: {
        width: '100%',
        paddingTop: theme.spacing(4),
    },
  },
  title: {
      fontWeight: '600',
      fontSize: '16px',
      color: '#3f51b5'
  },
  socialMedia: {
      textAlign: 'center',
      display: 'flex',
      [theme.breakpoints.down('sm')]: {
          justifyContent:'space-around'
      },
  },
  media: {
      marginRight: '10px',
  },
  content:{
      margin: theme.spacing(2,0),
      color: 'black',
      fontWeight: '600',
      fontSize: '14px',
  }
}));

const Profile = () => {
  const classes = useStyles();
  return (
    <div>
      <Box className={classes.banner}>
        <img className={classes.profileImg} src={imgUrl} alt="profile" />
      </Box>
      <Box className={classes.description}>
        <Grid container spacing={2} justify="space-between">
          <Grid item>
            <Typography variant="h6">
              <span className={classes.title}> {artistInfo.title}</span> @ {artistInfo.name}
            </Typography>
            <Typography variant="h6">
              {artistInfo.location} {artistInfo.likes}
            </Typography>
          </Grid>
          <Grid item>
            <Grid container alignItems="center">
              <span>
                <SettingIcon />
              </span>
              <Button
                variant="contained"
                color="secondary"
                style={{ margin: "0 5px" }}
              >
                Follow
              </Button>
              <Button variant="contained" style={{ background: "#efc233" }}>
                Contribution
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Typography variant="subtitle2" className={classes.content}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit...
        </Typography>
        <Box className={classes.socialMedia}>
            <Box className={clsx(classes.media)}>
                <Typography className={classes.title}>
                    234K
                </Typography>
                <span> Follower</span>
            </Box>
            <Box className={clsx(classes.media)}>
                <Typography className={classes.title}>
                    234K
                </Typography>
                <span> Following</span>
            </Box>
            <Box className={clsx(classes.media)}>
                <Typography className={classes.title}>
                    234K
                </Typography>
                <span> Likes</span>
            </Box>
        </Box>
      </Box>
      <ProfileTab profileData={profileData} />
    </div>
  );
};

export default Profile;
