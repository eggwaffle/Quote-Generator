import { GetServerSideProps, GetStaticProps, GetStaticPaths } from 'next'
import Head from 'next/head'
//import { getAllPostIds, getPostData } from '../lib/posts'
import { getDataByAuthor } from '../api/quotes'
import Layout, { siteTitle } from '../../components/layout'
import utilStyles from '../styles/utils.module.sass'


export const getServerSideProps: GetServerSideProps = async (context: any) => {
  // Use `context.params` to get dynamic params
  const data = await getDataByAuthor(context.params.author as string)

  if (!data) {
    return {
      notFound: true,
    }
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
 }: {
  quoteObject: [
    item: {
      _id: string
      quoteText: string
    }
  ]
  authorResult: string
}) {
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