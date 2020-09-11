import React from 'react';
import { PageProps } from 'gatsby';
import { useI18next } from 'gatsby-plugin-react-i18next';
import Head from '../components/Head';

const home: React.FC<PageProps> = ({ path }) => {
  const { t } = useI18next();
  return (
    <>
      <Head pathname={path} />
      {t('Hello world!')}
    </>
  );
};

export default home;
