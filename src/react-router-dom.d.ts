declare module 'react-router-dom' {
  import type { ReactNode } from 'react'
  export function BrowserRouter(props: { children: ReactNode }): JSX.Element
  export function Routes(props: { children: ReactNode }): JSX.Element
  export function Route(props: { path?: string; index?: boolean; element?: ReactNode; children?: ReactNode | ReactNode[] }): null
  export function Link(props: { to: string; className?: string; children?: ReactNode; 'aria-label'?: string }): JSX.Element
  export function Outlet(): JSX.Element
}
