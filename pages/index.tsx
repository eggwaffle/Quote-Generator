import Head from 'next/head'
import Link from 'next/link'
import { GetServerSideProps } from 'next'
import { getRandomData } from './api/quotes'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.sass'

interface quoteObject  {
  quoteText: string
  quoteAuthor: string
  quoteGenre: string
}

const Home = ({
  quoteText,
  quoteAuthor,
  quoteGenre
 }: quoteObject): JSX.Element => {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <main className={utilStyles.centerContainer}>
        <section className={utilStyles.quoteContainer}>
          <div>{`"${quoteText}"`}</div>
        </section>
        <Link href={`/author/${quoteAuthor}`}>
          <a
            onClick={() => {
              console.log(quoteAuthor)
            }}
          >
            <div>
              <h2>{quoteAuthor}</h2>
              <p>{quoteGenre}</p>
            </div>
            <span className="material-icons">
              arrow_right_alt
            </span>
          </a>
        </Link>
      </main>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const jsonData = await getRandomData()

  if (!jsonData) {
    return {
      notFound: true,
    } // will render 404 error page
  }
  return {
    props: {
      totalQuotes: jsonData.totalQuotes,
      quoteText: jsonData.data[0].quoteText,
      quoteAuthor: jsonData.data[0].quoteAuthor,
      quoteGenre: jsonData.data[0].quoteGenre
    }, // will be passed to the page component as props
  }
}

export default Home