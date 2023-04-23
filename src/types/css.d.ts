interface Css {
  [key: string]: string;
}

declare module '*.css' {
  const css: Css;
  export = css;
}
