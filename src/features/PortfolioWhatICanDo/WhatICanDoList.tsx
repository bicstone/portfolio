import { graphql } from "gatsby";

import { WhatICanDoCard } from "./WhatICanDoCard";

import type { PortfolioWhatICanDoListFragment } from "@/generated/graphqlTypes";

export const query = graphql`
  fragment PortfolioWhatICanDoList on ContentfulWhatICanDo {
    id
    ...PortfolioWhatICanDoCard
  }
`;

export const WhatICanDoList = (props: {
  whatICanDos: readonly PortfolioWhatICanDoListFragment[];
}): JSX.Element => {
  const { whatICanDos } = props;

  return (
    <div
      css={(theme) => ({
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
      {whatICanDos.map((whatICanDo) => (
        <WhatICanDoCard key={whatICanDo.id} whatICanDo={whatICanDo} />
      ))}
    </div>
  );
};
