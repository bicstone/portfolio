import styled from "@emotion/styled";
import Button, { type ButtonProps } from "@mui/material/Button";
import { Link } from "gatsby";
import { forwardRef } from "react";

import { TRANSLATION } from "@/constants/TRANSLATION";

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(1),
  marginRight: theme.spacing(1),
}));

// eslint-disable-next-line react/display-name -- internal use only
export const SocialLink = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    return (
      <StyledButton
        ref={ref}
        variant="outlined"
        color="secondary"
        size="small"
        rel="external noopener"
        {...props}
      />
    );
  }
) as typeof Button;

export const SocialLinks = (): JSX.Element => {
  return (
    <>
      <SocialLink component={Link} to="/blog" variant="contained" rel="">
        {TRANSLATION.blog.title}
      </SocialLink>
      <SocialLink href="https://zenn.dev/bicstone">Zenn</SocialLink>
      <SocialLink href="https://github.com/bicstone">GitHub</SocialLink>
      <SocialLink href="https://twitter.com/bicstone_me">Twitter</SocialLink>
      <SocialLink href="https://youtrust.jp/users/bicstone">
        YOUTRUST
      </SocialLink>
      <SocialLink href="https://www.linkedin.com/in/bicstone">
        LinkedIn
      </SocialLink>
      <SocialLink href="https://pay-career.com/spot_request/2022249011">
        PayCareer
      </SocialLink>
    </>
  );
};
