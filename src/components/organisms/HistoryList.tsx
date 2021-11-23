import React from 'react';
import { useI18next } from 'gatsby-plugin-react-i18next';
import { Typography, Grid } from '@mui/material';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
} from '@mui/lab';
import { AvatarCard, SvgAvatar } from 'src/components';
import { IndexPageQuery } from 'src/types';

export type HistoryListProps = {
  histories: IndexPageQuery['histories']['edges'];
};

/**
 * 経歴
 */
export const HistoryList: React.FC<HistoryListProps> = ({ histories }) => {
  const { t, language } = useI18next();
  const yearToAge = (year: number): number => React.useMemo(() => year - 1996, [year]);

  return (
    <Timeline css={{ padding: 0 }}>
      {histories.map(
        ({ node }, index, { length }) =>
          node.node_locale === language && (
            <TimelineItem key={node.id} css={{ '&:before': { display: 'none' } }}>
              <TimelineSeparator
                css={theme => ({
                  flex: `0 0 ${theme.spacing(8)}`,
                  marginTop: 1,
                  wordBreak: 'keep-all',
                  whiteSpace: 'nowrap',
                })}
              >
                <Typography variant="body2" color="textSecondary">
                  {t('histories.date', { date: node.date })}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {t('histories.age', { age: `${yearToAge(Number(node.date))}` })}
                </Typography>
                {index < length - 2 && <TimelineConnector />}
              </TimelineSeparator>
              <TimelineContent>
                <AvatarCard
                  avatar={
                    <SvgAvatar name={node?.icon?.name || ''} svg={node?.icon?.svg?.svg || ''} />
                  }
                  title={
                    <Typography component="h2" variant="h6">
                      {node.name}
                    </Typography>
                  }
                  disableTypography
                />
              </TimelineContent>
            </TimelineItem>
          ),
      )}
    </Timeline>
  );
};
