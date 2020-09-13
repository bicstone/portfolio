import React from 'react';
import { PageProps } from 'gatsby';

import { Container } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';

import Hello from '../components/Hello';
import Layout from '../components/Layout';

const useStyles = makeStyles(theme => ({}));

const home: React.FC<PageProps> = ({ path }) => {
  const classes = useStyles();

  return (
    <Layout pathname={path} isHome>
      <Container maxWidth="lg">
        <Hello />
      </Container>
    </Layout>
  );
};

export default home;
