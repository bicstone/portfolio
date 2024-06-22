import { type ReactNode } from "react";

export interface ExternalLinkProps {
  children: ReactNode;
}

export const ExternalLink = ({ children }: ExternalLinkProps): JSX.Element => {
  return (
    <span title="外部リンクのため、別ウインドウで開きます">{children}</span>
  );
};
