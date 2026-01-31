/// <reference types="vite/client" />
/// <reference path="./react-jsx.d.ts" />
/// <reference path="./react-modules.d.ts" />

declare module '*.css' {
  const url: string;
  export default url;
}

declare module '*.png' {
  const url: string;
  export default url;
}

declare module '*.jpg' {
  const url: string;
  export default url;
}

declare module '*.jpeg' {
  const url: string;
  export default url;
}

declare module '*.webp' {
  const url: string;
  export default url;
}
