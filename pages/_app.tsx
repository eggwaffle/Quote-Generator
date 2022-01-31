import { useState } from 'react';
import type { AppProps } from 'next/app'
import '../styles/global.sass'

function MyApp({ Component, pageProps }: AppProps) {
  const [qAuthor, setQAuthor] = useState("");
  const updateAuthor = (newAuthor: string) => setQAuthor(newAuthor)
  return <Component
    {...pageProps}
    qAuthor={qAuthor}
    updateAuthor={updateAuthor}
  />
}

export default MyApp
