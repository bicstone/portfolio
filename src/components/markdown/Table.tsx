import MuiTable from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import { styled } from "@mui/material/styles";

import type { HTMLAttributes } from "react";

const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
  margin: theme.spacing(2),
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
