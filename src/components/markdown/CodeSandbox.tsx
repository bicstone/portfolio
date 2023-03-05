// forked from https://github.com/PaulieScanlon/mdx-embed/blob/c93115daa96291f1a23f6acdf90e8897142f6b3a/packages/mdx-embed/src/components/codesandbox/codesandbox.tsx
// MIT License Copyright (c) 2020 Paul Scanlon

import styled from "@emotion/styled";
import { type FunctionComponent } from "react";

import { GeneralObserver } from "./general-observer";
export interface ICodeSandboxProps {
  /** CodeSandbox id */
  codeSandboxId: string;
}

const StyledIframe = styled("iframe")(({ theme }) => ({
  width: "100%",
  height: "500px",
  border: `1px solid ${theme.vars.palette.divider}`,
  borderRadius: theme.spacing(2),
  overflow: "hidden",
}));

export const CodeSandbox: FunctionComponent<ICodeSandboxProps> = ({
  codeSandboxId,
}: ICodeSandboxProps) => (
  <GeneralObserver>
    <StyledIframe
      title="codeSandbox preview page"
      src={`https://codesandbox.io/embed/${codeSandboxId}`}
      loading="lazy"
      referrerPolicy="no-referrer"
      allow=""
    />
  </GeneralObserver>
);
