import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { graphql } from "gatsby";
import { useMemo } from "react";

import type { PortfolioCertificationDetailFragment } from "@/generated/graphqlTypes";

import { formatDateTime } from "@/utils/format";
import { isDefined } from "@/utils/typeguard";

export const query = graphql`
  fragment PortfolioCertificationDetail on CertificationsYamlCertifications {
    name
    startDate
    endDate
  }
`;

export const CertificationDetail = (props: {
  certification: PortfolioCertificationDetailFragment;
}): JSX.Element => {
  const { certification } = props;

  const startDate = useMemo(() => {
    return formatDateTime(certification.startDate, "yyyy/MM/dd");
  }, [certification.startDate]);

  const endDate = useMemo(() => {
    return formatDateTime(certification.endDate, "yyyy/MM/dd");
  }, [certification.endDate]);

  const formattedDate = useMemo(() => {
    if (isDefined(endDate) && endDate !== "") {
      return `${startDate} - ${endDate}`;
    }
    return startDate;
  }, [startDate, endDate]);

  return (
    <ListItem>
      <ListItemText primary={certification.name} secondary={formattedDate} />
    </ListItem>
  );
};
