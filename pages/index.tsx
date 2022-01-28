import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.sass'

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <main>
        <section>
        A quote
        </section>
        <Link href="/quotes">
          <a
            onClick={() => console.log("more quotes")}
          >
            <div className={utilStyles.quoteAuthor}>
              <h1>Author</h1>
              <p>type</p>
            </div>
          </a>
        </Link>
      </main>
    </Layout>
  )
}

export default Home
