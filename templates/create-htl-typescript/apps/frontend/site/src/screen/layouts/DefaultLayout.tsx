import { Footer } from '@screen/components/common/Footer';
import { Header } from '@screen/components/common/Header';
import { FlexFullScreenStyle } from '@screen/styles/FlexFullScreenStyle';
import { MainContainerStyle } from '@screen/styles/MainContainerStyle';

export function DefaultLayout({ children }: PropsWithChildren): JSX.Element {
  return (
    <FlexFullScreenStyle>
      <Header />

      <MainContainerStyle>{children}</MainContainerStyle>

      <Footer />
    </FlexFullScreenStyle>
  );
}
