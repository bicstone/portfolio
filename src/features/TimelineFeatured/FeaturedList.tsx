import styled from "@emotion/styled";
import { StaticImage } from "gatsby-plugin-image";

import { FeaturedCard } from "./FeaturedCard";
import { FEATURES } from "./constants";

const Container = styled("div")(({ theme }) => ({
  display: "grid",
  gap: theme.spacing(3),
  gridTemplateColumns: "repeat(2, 1fr)",
  width: "100%",
  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns: "repeat(1, 1fr)",
  },
}));

export const FeaturedList = (): JSX.Element => {
  return (
    <Container as="section">
      {/* StaticImageを使用するためベタ書き */}
      {FEATURES.map((item) => (
        <FeaturedCard key={item.url} {...item}>
          <StaticImage
            src={item.ogImage}
            alt={item.title}
            width={1200}
            height={630}
            decoding="async"
            loading="eager"
          />
        </FeaturedCard>
      ))}
    </Container>
  );
};
