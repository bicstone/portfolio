import React from 'react';
import { useI18next } from 'gatsby-plugin-react-i18next';

const home: React.FC = () => {
  const { t } = useI18next();
  return <div>{t('Hello world!')}</div>;
};

export default home;
