import { FlexFullScreenStyle } from '@screen/styles/FlexFullScreenStyle';

export function Layout({ children }: PropsWithChildren): JSX.Element {
  return <FlexFullScreenStyle id="layout">{children}</FlexFullScreenStyle>;
}
