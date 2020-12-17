import React from 'react';

import classNames from 'classnames';
import { useHistory } from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';


import './Character.scss';

const useStyles = makeStyles((theme) => ({
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },

  expand: {
    fontSize: 18,
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

export default function Character({ character, onFavorite }) {
  const classes = useStyles();
  const history = useHistory();

  const { name, id, liked } = character;

  const handleCharacterClick = () => {
    history.push(`/characters/${id}`);
  };

  return (
    <Card className="card">
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            { name && name[0] }
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
        <IconButton aria-label="add to favorites" onClick={() => onFavorite(id)}>
          <FavoriteIcon className={classNames('card__favorite', { "card__liked": liked })} />
        </IconButton>

        <IconButton className={clsx(classes.expand)} onClick={handleCharacterClick}>More</IconButton>
      </CardActions>
    </Card>
  );
}