import type { Theme as MuiTheme } from "@mui/material";

// mui
import type {} from "@mui/material/themeCssVarsAugmentation";

// emotion
declare module "@emotion/react" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface Theme extends MuiTheme {}
}
