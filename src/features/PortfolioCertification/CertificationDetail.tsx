import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { graphql } from "gatsby";

import type { PortfolioCertificationDetailFragment } from "@/generated/graphqlTypes";

import { formatDateTime } from "@/utils/format";

export const query = graphql`
  fragment PortfolioCertificationDetail on CertificationsYaml {
    title
    date
    endDate
  }
`;

export const CertificationDetail = (props: {
  certification: PortfolioCertificationDetailFragment;
}): JSX.Element => {
  const { certification } = props;

  const date = formatDateTime(certification.date, "yyyy/MM/dd");
  const endDate = formatDateTime(certification.endDate, "yyyy/MM/dd");
  const formattedDate = endDate !== "" ? `${date} - ${endDate}` : date;

  return (
    <ListItem>
      <ListItemText primary={certification.title} secondary={formattedDate} />
    </ListItem>
  );
};
