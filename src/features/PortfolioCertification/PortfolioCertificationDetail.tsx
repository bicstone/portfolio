import { ListItem, ListItemText } from "@mui/material";
import { graphql } from "gatsby";
import { useMemo } from "react";

import type { PortfolioCertificationDetailFragment } from "@/generated/graphqlTypes";

import { formatDateTime } from "@/utils/format";

export const PortfolioCertificationDetailQuery = graphql`
  fragment PortfolioCertificationDetail on ContentfulQualification {
    name
    date
  }
`;

export const PortfolioCertificationDetail = (props: {
  certification: PortfolioCertificationDetailFragment;
}): JSX.Element => {
  const date = useMemo(() => {
    return formatDateTime(props.certification.date, "yyyy/MM");
  }, [props.certification.date]);

  return (
    <ListItem>
      <ListItemText primary={props.certification.name} secondary={date} />
    </ListItem>
  );
};
