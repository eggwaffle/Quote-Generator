import Head from 'next/head'
import styles from './layout.module.sass'
import utilStyles from '../styles/utils.module.sass'
import Link from 'next/link'

export const siteTitle = 'Random Quote Generator'

export default function Layout({
  children,
  home
 }: {
    children: React.ReactNode
    home?: boolean
 }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/devchallenges.png" />
        <meta
          name="description"
          content=" a quote generator app"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />

      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Link href="/">
              <a
                onClick={() => console.log("random!")}
              >
                random
              </a>
            </Link>
          </>
        ) : 404 ? (
          <>
          </>
        ) : (
            <Link href="/">
              <a
                onClick={() => console.log("random!")}
              >
                random
              </a>
            </Link>
        )}
      </header>
      <main>{children}</main>
        <footer className='footer'>created by <b>
          <a
            href="https://github.com/eggwaffle"
            target="_blank"
            rel="noopener noreferrer"
          >
            eggwaffle
          </a>
        </b> - devChallenges.io
      </footer>
    </div>
  )
}