import styled from "@emotion/styled";
import Card, { type CardProps } from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import Typography from "@mui/material/Typography";

import { ExternalLink } from "@/components/ExternalLink";
import { isDefined } from "@/utils/typeguard";

const StyledCard = styled(Card)({
  paddingBottom: "100%",
  position: "relative",
}) as typeof Card;

const StyledCardActionArea = styled(CardActionArea)(({ theme }) => ({
  padding: theme.spacing(2),

  position: "absolute",
  bottom: 0,
  left: 0,
  right: 0,
  top: 0,

  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "space-evenly",
})) as typeof CardActionArea;

export type BioHelloCardProps = CardProps & {
  logo: string;
  darkLogo?: string;
  title: string;
  subTitle: string;
  actionTitle: string;
  url: string;
};

export const BioSocialLinkCard = ({
  logo,
  darkLogo,
  title,
  subTitle,
  actionTitle,
  url,
  ...props
}: BioHelloCardProps): JSX.Element => {
  return (
    <StyledCard {...props} component="article">
      <StyledCardActionArea
        href={url}
        rel="external noopener"
        title={actionTitle}
      >
        {isDefined(darkLogo) ? (
          <>
            <img
              width={32}
              height={32}
              src={logo}
              alt={title}
              loading="eager"
              decoding="async"
              css={{
                display: "block",
                '[data-mui-color-scheme="dark"] &': {
                  display: "none",
                },
              }}
            />
            <img
              width={32}
              height={32}
              src={darkLogo}
              alt={title}
              loading="eager"
              decoding="async"
              css={{
                display: "none",
                '[data-mui-color-scheme="dark"] &': {
                  display: "block",
                },
              }}
            />
          </>
        ) : (
          <img
            width={32}
            height={32}
            src={logo}
            alt={title}
            loading="eager"
            decoding="async"
          />
        )}
        <div>
          <Typography variant="body1" component="h2">
            <ExternalLink>{title}</ExternalLink>
          </Typography>
          <Typography variant="caption" color="text.secondary">
            {subTitle}
          </Typography>
        </div>
      </StyledCardActionArea>
    </StyledCard>
  );
};
