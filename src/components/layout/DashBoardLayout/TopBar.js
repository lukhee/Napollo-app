import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import clsx from "clsx";
import PropTypes from "prop-types";
import {
  AppBar,
  Box,
  Hidden,
  Avatar,
  IconButton,
  Toolbar,
  makeStyles,
  ListItem,
  Button,
  Grid,
  TextField,
  InputAdornment,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { Search } from "react-feather";
import Logo from "../../general/Logo";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: "linear-gradient(to right, #d61414, #f7f73c)",
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
    color: 'white',
    borderTop: '4px solid white',
    borderRadius: '0',
    "& $title": {
      fontWeight: theme.typography.fontWeightMedium,
    },
    "& $icon": {
      color: 'white',
    },
  },
  searchField: {
    margin: "5px 10px",
    width: "155px",
  },
}));

const TopBar = ({ className, onMobileNavOpen, items, ...rest }) => {
  const classes = useStyles();

  return (
    <AppBar position='relative' className={clsx(classes.root)} elevation={0} {...rest}>
      <Toolbar>
        <Box>
          <Link to="/">
            <Logo />
          </Link>
          <TextField
            id="standard-start-adornment"
            placeholder="Search"
            size="small"
            className={clsx(classes.searchField)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
          />
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
                      component={NavLink}
                      to={href}
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
        <Hidden mdDown>
          <h4 className={classes.title}> Smith John </h4>
          <Avatar>SJ</Avatar>
        </Hidden>
        <Hidden lgUp>
          <IconButton color="inherit" onClick={onMobileNavOpen}>
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

TopBar.propTypes = {
  className: PropTypes.string,
  onMobileNavOpen: PropTypes.func,
};

export default TopBar;
