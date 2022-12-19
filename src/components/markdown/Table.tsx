import styled from "@emotion/styled";
import { TableContainer, Table as MuiTable } from "@mui/material";

import type { HTMLAttributes } from "react";

const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
  margin: theme.spacing(2, 0),
}));

export const Table = ({
  children,
  ...props
}: HTMLAttributes<HTMLTableElement>): JSX.Element => {
  return (
    <StyledTableContainer {...props}>
      <MuiTable size="small">{children}</MuiTable>
    </StyledTableContainer>
  );
};
