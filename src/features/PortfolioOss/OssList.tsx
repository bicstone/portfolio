import Box from "@mui/material/Box";
import { graphql } from "gatsby";

import { OssCard } from "./OssCard";

import type { PortfolioOssListFragment } from "@/generated/graphqlTypes";

export const query = graphql`
  fragment PortfolioOssList on OssesYamlConnection {
    nodes {
      id
      ...PortfolioOssCard
    }
  }
`;

export const OssList = (props: {
  osses: PortfolioOssListFragment;
}): JSX.Element => {
  const { osses } = props;

  return (
    <Box
      sx={(theme) => ({
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: theme.spacing(2),
        [theme.breakpoints.only("xs")]: {
          gridTemplateColumns: "repeat(1, 1fr)",
        },
        [theme.breakpoints.only("sm")]: {
          gridTemplateColumns: "repeat(2, 1fr)",
        },
      })}
    >
      {osses.nodes.map((oss) => (
        <OssCard key={oss.id} oss={oss} />
      ))}
    </Box>
  );
};
