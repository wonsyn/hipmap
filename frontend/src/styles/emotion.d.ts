import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    colors: {
      black: string;
      mainColor: string;
      subColorFuchsia: string;
      subColorGreen: string;
      subColorHotPink: string;
      subColorCyan: string;
      subColorYellow: string;
      subColorDarkPurple: string;
      subColorGradient1: string;
      subColorGradient2: string;
      subColorGradient3: string;
    };
  }
}
