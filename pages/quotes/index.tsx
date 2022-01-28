import Head from 'next/head'
//import { getAllPostIds, getPostData } from '../lib/posts'
import Layout, { siteTitle } from '../../components/layout'
import utilStyles from '../styles/utils.module.sass'
import { GetStaticProps, GetStaticPaths } from 'next'

export default function Post({
  postData
 }: {
   postData: {
     title: string
     date: string
     contentHtml: string
   }
}) {
  // Render the page
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <article>
        <h1>Author</h1>
        <main>
          Several quotes
        </main>
      </article>
    </Layout>
  )
}

/*
<h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
*/
/*
export const getStaticPaths: GetStaticPaths = async () => {
  // Return a list of possible value for id
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // Fetch necessary data for the blog post using params.id
  // `params.id` from getStaticProps({ params }) know the key is named `id`
  // based on the value from the file name
  const postData = await getPostData(params.id as string)
  return {
    props: {
      postData
    }
  }
}
*/