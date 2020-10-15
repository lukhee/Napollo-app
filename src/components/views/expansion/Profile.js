import React from 'react';
import { Box, Grid, makeStyles, Typography, Button } from "@material-ui/core";
import { Bold } from 'react-feather';

const useStyles = makeStyles((theme) => ({
    root: {
      padding: theme.spacing(1),
      textAlign: 'center',
      width: '100px',
      height: '200px',
      margin: theme.spacing(2),
      color: 'grey',
      fontWeight: 'bold',
      '& $img': {
          width: '100%',
          height: '50%',
          borderRadius: '50%'
      }
    },
    artistName:{
        color: 'blue',
        fontWeight: '600'
    },
    subTitle:{
        fontWeight: '600',
        fontSize: '14px',
    }
  }));

const Profile = ({data:{imgUrl, name, likes, country, countryCode}}) => {
    const classes = useStyles();
    return (
        <Grid item className={classes.root}>
            <img src={imgUrl} alt="profile" />
            <Box>
                <Typography className={classes.artistName} variant='h6'>
                    {name}
                </Typography>
                <Typography className={classes.subTitle} variant='subtitle2'>
                    {likes} <span>  Likes </span>
                </Typography>
                <Typography className={classes.subTitle} variant='subtitle2'>
                    {country}
                </Typography>
                <Typography className={classes.subTitle} variant='subtitle2'>
                    {countryCode}
                </Typography>
            </Box>
        </Grid>
    );
};

export default Profile;