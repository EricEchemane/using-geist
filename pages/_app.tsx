import 'inter-ui/inter.css';
import type { AppProps } from 'next/app';
import { ThemeChangerProvider } from 'contexts/theme_changer';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeChangerProvider>
      <Component {...pageProps} />
    </ThemeChangerProvider>
  );
}

export default MyApp;
