import 'styled-components';

export type IColor = {
  light: string;
  main: string;
  dark: string;
};

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      default: IColor;
      primary: IColor;
      secondary: IColor;
      danger: IColor;
      warning: IColor;
      success: IColor;
      bg: IColor;
      borderColor: string;
      text: string;
      textSecondary: string;
    };
    fontSizeBase: string;
    fontSizes: number[];
    fontWeights: number[];
    fontFamily: string;
    borderRadius: number;
    lineHeight: number;
    transition: string;
  }
}
