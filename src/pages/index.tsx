import React from 'react';
import { useI18next } from 'gatsby-plugin-react-i18next';
import Head from '../components/Head';

const home: React.FC = () => {
  const { t } = useI18next();
  return (
    <>
      <Head />
      {t('Hello world!')}
    </>
  );
};

export default home;
