import { GetServerSideProps } from 'next'
import { ParsedUrlQuery } from 'querystring';
import Head from 'next/head'
//import { getAllPostIds, getPostData } from '../lib/posts'
import { getDataByAuthor } from '../api/quotes'
import Layout, { siteTitle } from '../../components/layout'
import utilStyles from '../styles/utils.module.sass'

interface quoteProps {
  quoteObject: [
    item: {
      _id: string
      quoteText: string
    }
  ]
  authorResult: string
}

interface Params extends ParsedUrlQuery {
  author: string
}

export const getServerSideProps: GetServerSideProps<quoteProps, Params> = async (context) => {
  // Use `context.params` to get dynamic params
  const params = context.params!   // ! is a non-null assertion
  const data = await getDataByAuthor(params.author)

  if (!data) {
    return {
      notFound: true,
    } // will render 404 error page
  }

  return {
    props: {
      quoteObject: data.data,
      authorResult: data.data[0].quoteAuthor
    }, // will be passed to the page component as props
  }
}

export default function Post( {
  quoteObject,
  authorResult
 }: quoteProps) {
  // Render the page
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <article>
        <h1>{authorResult}</h1>
        <main>
          {quoteObject.map((item) => {
            return (
              <p key={item._id}>{item.quoteText}</p>
            )
            })}
        </main>
      </article>
    </Layout>
  )
}