import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import scarecrow from '../public/images/Scarecrow.png'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.sass'

const Custom404: NextPage = () => {
  return (
    <Layout notFound>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <main className={utilStyles.notFound}>
        <div>
          <Image src={scarecrow} alt="Scarecrow" />
        </div>
        <div>
          <h2>I have bad news for you</h2>
          <h4>404 - Page Not Found</h4>
          <p>The page you are looking for might be removed or is temporarily unavailable</p>
          <div className={utilStyles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
        </div>
      </main>
    </Layout>
  )
}

export default Custom404