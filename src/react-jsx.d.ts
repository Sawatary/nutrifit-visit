/**
 * Minimal type declarations so TS can resolve react/jsx-runtime and JSX
 * when @types/react is not found (e.g. under Yarn PnP in some editors).
 */
declare global {
  namespace JSX {
    interface Element {}
    interface ElementClass {}
    interface ElementAttributesProperty {
      props: {};
    }
    interface ElementChildrenAttribute {
      children: {};
    }
    interface IntrinsicAttributes {}
    interface IntrinsicClassAttributes<T> {}
    interface IntrinsicElements {
      [elemName: string]: Record<string, unknown> | undefined;
    }
  }
}

declare module 'react/jsx-runtime' {
  export const jsx: (type: unknown, props: Record<string, unknown>, key?: string) => JSX.Element;
  export const jsxs: (type: unknown, props: Record<string, unknown>, key?: string) => JSX.Element;
  export const Fragment: unknown;
  export default { jsx, jsxs, Fragment };
}

declare module 'react/jsx-dev-runtime' {
  export { jsx, jsxs, Fragment } from 'react/jsx-runtime';
  export const jsxDEV: (type: unknown, props: Record<string, unknown>, key: string | undefined, isStaticChildren: boolean, source: unknown, self: unknown) => JSX.Element;
  export default {};
}

export {};
