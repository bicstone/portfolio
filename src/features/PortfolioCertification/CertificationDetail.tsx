import { ListItem, ListItemText } from "@mui/material";
import { graphql } from "gatsby";
import { useMemo } from "react";

import type { PortfolioCertificationDetailFragment } from "@/generated/graphqlTypes";

import { formatDateTime } from "@/utils/format";

export const query = graphql`
  fragment PortfolioCertificationDetail on ContentfulQualification {
    name
    date
  }
`;

export const CertificationDetail = (props: {
  certification: PortfolioCertificationDetailFragment;
}): JSX.Element => {
  const { certification } = props;

  const date = useMemo(() => {
    return formatDateTime(certification.date, "yyyy/MM");
  }, [certification.date]);

  return (
    <ListItem>
      <ListItemText primary={certification.name} secondary={date} />
    </ListItem>
  );
};
