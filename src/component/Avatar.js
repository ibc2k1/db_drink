import React from 'react';
import { withStyles } from '@material-ui/styles';
import Avatar from '@material-ui/core/Avatar';

const styles = theme =>( ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(2),
    },
  },
  large: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
}));

export default function ImageAvatars(i) {
  const classes = withStyles(styles);

  return (
    <div className={classes.root}>
      
      <Avatar alt="Remy Sharp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvksDFCgTDaZgfOCKgZM6Tb8JaSbO1HhO6Cw&usqp=CAU" className={classes.large} />
    </div>
  );
}
