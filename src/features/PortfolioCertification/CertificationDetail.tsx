import { ListItem, ListItemButton, ListItemText } from "@mui/material";
import { graphql } from "gatsby";
import { useMemo } from "react";

import type { PortfolioCertificationDetailFragment } from "@/generated/graphqlTypes";

import { TRANSLATION } from "@/constants/TRANSLATION";
import { formatDateTime } from "@/utils/format";
import { isDefined } from "@/utils/typeguard";

export const query = graphql`
  fragment PortfolioCertificationDetail on ContentfulQualification {
    name
    date
    endDate
    url
  }
`;

export const CertificationDetail = (props: {
  certification: PortfolioCertificationDetailFragment;
}): JSX.Element => {
  const { certification } = props;

  const date = useMemo(() => {
    return formatDateTime(certification.date, "yyyy/MM/dd");
  }, [certification.date]);

  const endDate = useMemo(() => {
    return formatDateTime(certification.endDate, "yyyy/MM/dd");
  }, [certification.endDate]);

  const formattedDate = useMemo(() => {
    if (isDefined(endDate) && endDate !== "") {
      return `${date} - ${endDate}`;
    }
    return date;
  }, [date, endDate]);

  return isDefined(certification.url) ? (
    <ListItem>
      <ListItemButton
        href={certification.url}
        rel="external noreferrer noopener"
        title={TRANSLATION.certification.detail.title}
        disableGutters
      >
        <ListItemText primary={certification.name} secondary={formattedDate} />
      </ListItemButton>
    </ListItem>
  ) : (
    <ListItem>
      <ListItemText primary={certification.name} secondary={formattedDate} />
    </ListItem>
  );
};
