import React from 'react';

import { useSelector } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import './Character.scss';

const useStyles = makeStyles((theme) => ({
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },

  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },

  expandOpen: {
    transform: 'rotate(180deg)',
  },

  avatar: {
    backgroundColor: red[500],
  },
}));

export default function Character({ character }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const characters = useSelector(state => state.characters);
  const { name } = character;

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className="card">
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            { name[0] }
          </Avatar>
        }
        title={name}
        subheader="September 14, 2016"
      />

      <CardMedia
        className={classes.media}
        image="/static/images/cards/paella.jpg"
      />

      <CardContent>
        <Typography variant="body2" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </Typography>
      </CardContent>

      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon className="card__favorite" />
        </IconButton>

        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />

        </IconButton>
      </CardActions>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          Some information
        </CardContent>
      </Collapse>
    </Card>
  );
}