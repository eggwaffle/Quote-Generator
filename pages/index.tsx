import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { GetServerSideProps } from 'next'
import { getData } from './api/quotes'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.sass'

const Home = ({
  quoteObject,
 }: {
  quoteObject: {
    quoteText: string
    quoteAuthor: string
    quoteGenre: string
  }
}) => {
  const authorName: string = quoteObject.quoteAuthor
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <main>
        <section>
        <div>{quoteObject.quoteText}</div>
        </section>
        <Link href={`/author/${authorName}`}>
          <a
            onClick={() => {
              console.log(authorName)
            }}
          >
            <h2>{quoteObject.quoteAuthor}</h2>
            <p>{quoteObject.quoteGenre}</p>
          </a>
        </Link>
      </main>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const jsonData = await getData("/random")

  if (!jsonData) {
    return {
      notFound: true,
    }
  }
  return {
    props: {
      totalQuotes: jsonData.totalQuotes,
      quoteObject: jsonData.data[0]
    }, // will be passed to the page component as props
  }
}

export default Home