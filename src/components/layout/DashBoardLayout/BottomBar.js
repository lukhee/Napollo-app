import React from "react";
import artist from "../../general/imgs/artist1.jpg";
import clsx from "clsx";
import PropTypes from "prop-types";
import {
  Box,
  Hidden,
  IconButton,
  Toolbar,
  makeStyles,
  ListItem,
  Button,
  Grid,
  Typography,
} from "@material-ui/core";
import FilterListIcon from "@material-ui/icons/FilterList";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import {
  FastForward as FastForwardIcon,
  Play as PlayIcon,
  Rewind as RewindIcon,
} from "react-feather";

const items = [
  {
    id: 3,
    icon: RewindIcon,
  },
  {
    id: 2,
    icon: PlayIcon,
  },
  {
    id: 1,
    icon: FastForwardIcon,
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    background: "black",
    position: "fixed",
    bottom: 0,
    right: 0,
    left: 0,
  },
  avatar: {
    width: 60,
    height: 60,
  },
  item: {
    display: "flex",
    paddingTop: 0,
    paddingBottom: 0,
  },
  title: {
    marginRight: theme.spacing(2),
  },
  button: {
    color: theme.palette.text.secondary,
    fontWeight: theme.typography.fontWeightMedium,
    justifyContent: "center",
    letterSpacing: 0,
    padding: "10px 8px",
    textTransform: "none",
    width: "100%",
  },
  icon: {
    marginRight: theme.spacing(1),
  },
  active: {
    color: theme.palette.primary.main,
    "& $title": {
      fontWeight: theme.typography.fontWeightMedium,
    },
    "& $icon": {
      color: theme.palette.primary.main,
    },
  },
  "& .MuiTextField-root": {
    // margin: theme.spacing(1),
    width: 200,
  },
  searchField: {
    margin: "5px 10px",
    width: "155px",
  },
  musicPlayer: {
    display: "flex",
  },
  musicImg: {
    width: "50px",
    height: "auto",
    borderRadius: "5px",
    border: "2px solid white",
    marginRight: "10px",
  },
  musicDescription: {
    color: "white",
  },
  artistName: {
    color: "grey",
  },
  filterButton: {
    cursor: "pointer",
    marginRight: "15px",
  },
}));

const BottomBar = ({ className, onMobileNavOpen, ...rest }) => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root)} elevation={0} {...rest}>
      <Toolbar>
        <Box>
          <Box className={classes.musicPlayer}>
            <img alt="music" src={artist} className={classes.musicImg} />
            <Box className={classes.musicDescription}>
              <Typography variant="h4">Shape of You</Typography>
              <Typography className={classes.artistName} variant="subtitle2">
                Ed Sheeran
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box flexGrow={1} />
        <Hidden mdDown>
          <Grid item lg={6}>
            <Grid container justify="center" spacing={3}>
              {items.map(({ href, icon: Icon, id }) => (
                <Grid item key={id}>
                  <ListItem
                    className={clsx(classes.item, className)}
                    disableGutters
                    {...rest}
                  >
                    <Button
                      activeClassName={classes.active}
                      className={classes.button}
                    >
                      {Icon && <Icon className={classes.icon} size="20" />}
                    </Button>
                  </ListItem>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Hidden>
        <Box flexGrow={1} />
        <Box style={{ color: "grey", display: 'flex'}}>
          <Button activeClassName={classes.active} className={classes.button}>
          <FilterListIcon size='20' />
          </Button>
          <Button activeClassName={classes.active} className={classes.button}>
          <ExitToAppIcon size='20' />
          </Button>
        </Box>
      </Toolbar>
    </div>
  );
};

BottomBar.propTypes = {
  className: PropTypes.string,
  onMobileNavOpen: PropTypes.func,
};

export default BottomBar;
