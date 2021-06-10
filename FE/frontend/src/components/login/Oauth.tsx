import React from 'react';
import Main from '../main/Main';
import { useHistory } from 'react-router-dom';

const Oauth = () => {
  let history = useHistory();
  history.push('/main');
  return <Main />;
};

export default Oauth;
