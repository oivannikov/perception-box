import React from 'react';

import CircularProgress from '@material-ui/core/CircularProgress';

import './Loader.scss';

export function Loader() {
  return <CircularProgress className="loader" disableShrink />;
}
