import React from 'react';
import { PageProps } from 'gatsby';

import Layout from '../components/Layout';
import Hello from '../components/Hello';
import Project from '../components/Project';
import WhatIDo from '../components/WhatIDo';
import Skill from '../components/Skill';
import Contact from '../components/Contact';

const home: React.FC<PageProps> = ({ path }) => {
  return (
    <Layout pathname={path} isHome>
      <Hello />
      <WhatIDo />
      <Project />
      <Skill />
      <Contact />
    </Layout>
  );
};

export default home;
