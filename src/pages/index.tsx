import React from 'react';
import { PageProps } from 'gatsby';
import { useI18next } from 'gatsby-plugin-react-i18next';
import Layout from '../components/Layout';

const home: React.FC<PageProps> = ({ path }) => {
  const { t } = useI18next();
  return <Layout pathname={path}>{t('Hello world!')}</Layout>;
};

export default home;
