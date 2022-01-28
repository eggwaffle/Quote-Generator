import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.sass'

const Home: NextPage = () => {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <main>
        <section>
        A quote
        </section>
        <Link href="/">
          <a>
            <h1>Author</h1>
            <p>type</p>
          </a>
        </Link>
      </main>
    </Layout>
  )
}

export default Home
