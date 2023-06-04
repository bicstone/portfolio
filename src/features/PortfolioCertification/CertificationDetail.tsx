import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { graphql } from "gatsby";

import type { PortfolioCertificationDetailFragment } from "@/generated/graphqlTypes";

import { formatDateTime } from "@/utils/format";

export const query = graphql`
  fragment PortfolioCertificationDetail on CertificationsYaml {
    name
    startDate
    endDate
  }
`;

export const CertificationDetail = (props: {
  certification: PortfolioCertificationDetailFragment;
}): JSX.Element => {
  const { certification } = props;

  const startDate = formatDateTime(certification.startDate, "yyyy/MM/dd");
  const endDate = formatDateTime(certification.endDate, "yyyy/MM/dd");
  const formattedDate =
    endDate !== "" ? `${startDate} - ${endDate}` : startDate;

  return (
    <ListItem>
      <ListItemText primary={certification.name} secondary={formattedDate} />
    </ListItem>
  );
};
