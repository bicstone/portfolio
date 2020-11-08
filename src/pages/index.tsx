import React from 'react';
import { PageProps } from 'gatsby';

import Layout from '../components/Layout';
import Hello from '../components/Hello';
import Projects from '../components/Projects';
import WhatIDos from '../components/WhatIDos';
import Skills from '../components/Skills';
import Contacts from '../components/Contacts';
import Historys from '../components/Historys';
import OSSes from '../components/OSSes';

const home: React.FC<PageProps> = ({ path }) => {
  return (
    <Layout pathname={path} isHome>
      <Hello />
      <WhatIDos />
      <Projects />
      <Skills />
      <Contacts />
      <Historys />
      <OSSes />
    </Layout>
  );
};

export default home;
