import React from "react";
export type Svg = React.FunctionComponent<React.SVGAttributes<SVGElement>>;
declare module '*.svg' {
 export default Svg;
}
