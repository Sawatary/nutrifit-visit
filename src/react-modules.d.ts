/**
 * Type shims for 'react' and 'react-dom/client' so TS resolves them
 * when node_modules is not present (e.g. Yarn PnP in the IDE).
 */
declare module 'react' {
  export function useState<T>(initial: T | (() => T)): [T, (value: T | ((prev: T) => T)) => void]
  export function useEffect(effect: () => void | (() => void), deps?: unknown[]): void
  export function useRef<T>(initialValue: T | null): { current: T | null }
  export interface ReactContext<T> {
    Provider: (props: { value: T; children?: ReactNode }) => JSX.Element
  }
  export function createContext<T>(defaultValue: T | null): ReactContext<T>
  export function useContext<T>(context: ReactContext<T>): T
  export const StrictMode: (props: { children?: ReactNode }) => JSX.Element
  export const Fragment: (props: { children?: ReactNode }) => JSX.Element
  export type ReactNode = unknown
  export type DependencyList = readonly unknown[]
}

declare module 'react-dom/client' {
  export function createRoot(container: HTMLElement | DocumentFragment): {
    render(children: unknown): void
  }
}
