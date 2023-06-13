import styled from "@emotion/styled";
import LaunchIcon from "@mui/icons-material/LaunchRounded";

const StyledLaunchIcon = styled(LaunchIcon)(({ theme }) => ({
  fontSize: ".8rem",
  marginLeft: theme.spacing(0.5),
  color: theme.vars.palette.text.secondary,
  verticalAlign: "text-bottom",
}));

export interface ExternalLinkProps {
  children: React.ReactNode;
}

export const ExternalLink = ({ children }: ExternalLinkProps): JSX.Element => {
  return (
    <span>
      {children}
      <StyledLaunchIcon fontSize="inherit" titleAccess="外部リンク" />
    </span>
  );
};
