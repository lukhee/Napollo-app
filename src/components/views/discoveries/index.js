import React from "react";
import { makeStyles, Box, Typography } from "@material-ui/core";
import {
  FavoriteBorder as FavoriteBordericon,
  Close as CloseIcon,
} from "@material-ui/icons";
import artist1 from "../../../components/general/imgs/artist1.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    height: "100%",
    color: "white",
    "& img": {
      width: "100%",
      height: "100%",
      margin: theme.spacing(1, 0),
      border: "2px solid #f1f1f1",
      borderRadius: "9px",
    },
  },
  bg: {
    backgroundImage: `url(${artist1})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    filter: "blur(7px)",
    height: "100%",
  },
  music: {
    zIndex: "100",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    [theme.breakpoints.down('sm')]: {
        width: '80%'
    },
    [theme.breakpoints.up('md')]: {
        width: '30%'
    },
    [theme.breakpoints.up('lg')]: {
        width: '25%'
    },
  },
  actionButton: {
    display: "flex",
    justifyContent: "space-around",
    width: "100%",
    marginTop: '20px',
    '& div': {
        padding: '13px',
        borderRadius: '50%',
        color: 'white',
        '& :hover': {
            background: "blue"
        }
    },
  },
  closeIcon: {
      background: 'red',
  },
  likeIcon: {
      background: 'green',
      '& :hover': {
          background: "blue"
      }
  }
}));

const Discoveries = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.bg}></div>
      <div className={classes.music}>
        <Box>
          <Typography variant="h3">Artist Name</Typography>
          <Typography color="textSecondary" variant="body2">
            200Likes
          </Typography>
        </Box>
        <img alt="Artist" src={artist1} className={classes.artistImage} />
        <Box className={classes.actionButton}>
          <div className={classes.closeIcon}>
            <CloseIcon fontSize="large" />
          </div>
          <div className={classes.likeIcon}>
            <FavoriteBordericon fontSize="large" />
          </div>
        </Box>
      </div>
    </div>
  );
};

export default Discoveries;
