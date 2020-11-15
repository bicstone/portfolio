import React from 'react';
import { PageProps } from 'gatsby';

import {
  Layout,
  Hello,
  Projects,
  WhatICanDos,
  Skills,
  Contacts,
  Histories,
  OSSes,
} from '../components';

const home: React.FC<PageProps> = ({ path }) => {
  return (
    <Layout pathname={path}>
      <Hello />
      <WhatICanDos />
      <Projects />
      <Skills />
      <Contacts />
      <Histories />
      <OSSes />
    </Layout>
  );
};

export default home;
