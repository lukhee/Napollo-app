import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import TopBar from './TopBar';
import BottomBar from './BottomBar';
import {
  Heart as HeartIcon,
  Filter as FlameIcon,
  Map as LocationIcon,
  User as UserIcon,
  Music as MusicIcon,
} from 'react-feather';

const items = [
  {
    id: 1,
    href: '/discoveries',
    icon: HeartIcon,
    title: 'Discoveries'
  },
  {
    id: 2,
    href: '/hot_music',
    icon: FlameIcon,
    title: 'Whats Hot'
  },
  {
    id: 3,
    href: '/expansion',
    icon: LocationIcon,
    title: 'Exppansion'
  },
  {
    id: 4,
    href: '/Music',
    icon: MusicIcon,
    title: 'Music'
  },
  {
    id: 5,
    href: '/profile',
    icon: UserIcon,
    title: 'Profile Page'
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    // height: '100vh',
    overflow: 'hidden',
    width: '100%'
  },
  wrapper: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
    height: '85vh'
    // [theme.breakpoints.up('lg')]: {
    //   paddingLeft: 256
    // }
  },
  contentContainer: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden'
  },
  content: {
    flex: '1 1 auto',
    height: '100%',
    overflow: 'auto'
  }
}));

const DashboardLayout = ({children}) => {
  const classes = useStyles();
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <div className={classes.root}>
      <TopBar onMobileNavOpen={() => setMobileNavOpen(true)} items={items}/>
      <div className={classes.wrapper}>
        <div className={classes.contentContainer}>
          <div className={classes.content}>
            {children}
          </div>
        </div>
      </div>
      <BottomBar onMobileNavOpen={() => setMobileNavOpen(true)}/>
    </div>
  );
};

export default DashboardLayout;
