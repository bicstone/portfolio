import React from 'react';
import { PageProps } from 'gatsby';

import { makeStyles } from '@material-ui/core/styles';

import Layout from '../components/Layout';
import Hello from '../components/Hello';
import WhatIDo from '../components/WhatIDo';
import Skill from '../components/Skill';

const useStyles = makeStyles(theme => ({}));

const home: React.FC<PageProps> = ({ path }) => {
  const classes = useStyles();

  return (
    <Layout pathname={path} isHome>
      <Hello />
      <WhatIDo />
      <Skill />
    </Layout>
  );
};

export default home;
