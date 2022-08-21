import { Theme as MuiTheme } from '@mui/material';

declare module '@emotion/react' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface Theme extends MuiTheme {}
}

/// <reference types="@mui/material/themeCssVarsAugmentation" />
