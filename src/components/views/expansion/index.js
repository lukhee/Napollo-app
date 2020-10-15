import React from "react";
import { Box, makeStyles, Grid } from "@material-ui/core";
import Profile from './Profile'
import artist from '../../general/imgs/artist1.jpg'
import GoogleMap from './googleMap'

const profileData = [
    {
        id:1,
        name: 'Steve Job',
        likes: 200,
        countryCode: 234,
        country: 'USA',
        imgUrl: artist
    },{
        id:2,
        name: 'Steve Job',
        likes: 200,
        countryCode: 234,
        country: 'USA',
        imgUrl: artist
    },{
        id:3,
        name: 'Steve Job',
        likes: 200,
        countryCode: 234,
        country: 'USA',
        imgUrl: artist
    },{
        id:4,
        name: 'Steve Job',
        likes: 200,
        countryCode: 234,
        country: 'USA',
        imgUrl: artist
    },{
        id:5,
        name: 'Steve Job',
        likes: 200,
        countryCode: 234,
        country: 'USA',
        imgUrl: artist
    },{
        id:6,
        name: 'Steve Job',
        likes: 200,
        countryCode: 234,
        country: 'USA',
        imgUrl: artist
    },{
        id:7,
        name: 'Steve Job',
        likes: 200,
        countryCode: 234,
        country: 'USA',
        imgUrl: artist
    },{
        id:8,
        name: 'Steve Job',
        likes: 200,
        countryCode: 234,
        country: 'USA',
        imgUrl: artist
    },{
        id:9,
        name: 'Steve Job',
        likes: 200,
        countryCode: 234,
        country: 'USA',
        imgUrl: artist
    },{
        id:10,
        name: 'Steve Job',
        likes: 200,
        countryCode: 234,
        country: 'USA',
        imgUrl: artist
    }
]

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: '50px',
  },
  mapContainer: {
    width: "100%",
    height: "400px",
    background: "grey",
    [theme.breakpoints.down('sm')]: {
        height: '450px',
    },
  },
}));

const ExpandedMusic = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Box className={classes.mapContainer}> 
       <GoogleMap />
      </Box>
      <Grid container spacing={2} wrap='wrap' justify='center'>
          {
              profileData.map(data=>(
                <Profile key={data.id} data={data} />
              ))
          }
      </Grid>
    </div>
  );
};

export default ExpandedMusic;
