import React, { useEffect } from 'react';

import classNames from 'classnames';
import PropTypes from 'prop-types';

import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

import { setHomeworld } from '../../redux/actions';
import { getHomeworldCharacter } from '../../api/characters';

import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
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
    height: 50,
    width: 50,
    fontSize: 25,
  },
}));

export default function Character({ character, onFavorite }) {
  const classes = useStyles();
  const history = useHistory();
  const home = useSelector(state => state.homeworld);
  const dispatch = useDispatch();

  const { name, id, liked, gender, homeworld } = character;

  const handleCharacterClick = () => {
    history.push(`/characters/${id}`);
  };

  useEffect(() => {
    getHomeworldCharacter(homeworld)
      .then(result => dispatch(setHomeworld({[id]: result})));
  }, [character, homeworld, id, dispatch])

  return (
    <Card className="card">
      <CardHeader
        className="card__header"
        avatar={
          <>
            <Avatar aria-label="recipe" className={classes.avatar}>
              { name && name[0] }
            </Avatar>

            <Typography className="card__name" variant="body2" component="span">
              <br />{ name }
              <br /> From: { home[id] }
              <br /> Gender: { gender }
            </Typography>
          </>
        }
      />

      <CardActions className="card__footer" disableSpacing>
        <IconButton aria-label="add to favorites" onClick={() => onFavorite(id)}>
          <FavoriteIcon className={classNames('card__favorite', { "card__liked": liked })} />
        </IconButton>

        <IconButton className={clsx(classes.expand)} onClick={handleCharacterClick}>More</IconButton>
      </CardActions>
    </Card>
  );
}

Character.propTypes = {
  onFavorite: PropTypes.func.isRequired,
  character: PropTypes.object.isRequired,
}
