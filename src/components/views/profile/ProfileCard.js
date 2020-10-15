import React from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import { Heart as HeartIcon, MoreVertical as MoreVerticalIcon  } from "react-feather";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(1),
  },
  musicCard: {
    margin: 0,
    width: "100%",
  },
  index: {
      margin: 'auto 2px'
  },
  cardDescription: {
    display: "flex",
    justifyContent: "space-between",
    borderBottom: "1px solid grey",
    marginLeft: theme.spacing(1),
    color: "grey",
  },
  cardImg: {
    height: "100%",
    width: "100%",
  },
  img: {
    height: "auto",
    borderRadius: '5px',
    [theme.breakpoints.down('sm')]: {
        width: '70%'
    },
    [theme.breakpoints.up('md')]: {
        width: '100%'
    },
    [theme.breakpoints.up('lg')]: {
        width: '100%'
    },
  },
  musicLike: {
    textAlign: "right",
    margin: "auto 2px",
    fontSize: "14px",
    "& svg": {
      paddingTop: "4px",
    },
  },
  title: {
    color: "blue",
  },
}));

const MusicCard = ({ data: { url, title, name, likes, id } }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={2} className={classes.musicCard}>
        <Grid item xs={12} md={1} className={classes.cardImg}>
          <img className={classes.img} alt="profile" src={url} />
        </Grid>
        <Grid item xs={12} md={10} className={classes.cardDescription}>
          <Grid item={6}>
            <Typography variant="h6">
              <span className={classes.title}> {title} </span> @ 
            </Typography>
            <Typography variant="body2">{name}</Typography>
          </Grid>
          <Grid item xs={6} className={classes.musicLike}>
            <span> {likes}K Likes </span>
            <HeartIcon />
            <MoreVerticalIcon />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default MusicCard;
