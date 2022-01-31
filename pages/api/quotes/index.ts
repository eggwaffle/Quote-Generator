//import { createProxyMiddleware, Filter, Options, RequestHandler } from 'http-proxy-middleware';

import type { NextApiRequest, NextApiResponse } from 'next'


export const getData = async (id: string) => {
  try{
    const response = await fetch(`https://quote-garden.herokuapp.com/api/v3/quotes${id}`)
    const jsonData = await response.json()
    return jsonData
  } catch (err) {
    //res.status(500).json({ error: err})
    console.log(err)
  }

}

export const getDataByAuthor = async (author: string) => {
  try{
    const response = await fetch(`https://quote-garden.herokuapp.com/api/v3/quotes?author=${author}`)
    const jsonData = await response.json()
    return jsonData
  } catch (err) {
    //res.status(500).json({ error: err})
    console.log(err)
  }

}

export default async function handler (
  req: NextApiRequest,
  res: NextApiResponse,
  id: string
) {
  id = "?page=2"
  const jsonData = await getData(id)
    res.status(200).json(jsonData)
}


/*
type Data = {
  name: string
}

// Create proxy instance outside of request handler function to avoid unnecessary re-creation
const apiProxy = createProxyMiddleware({
  target: "https://quote-garden.herokuapp.com",
  changeOrigin: true,
  pathRewrite: {
    [`api/v3/quotes`]: "api/v3/quotes",
  },
  secure: false,
});


export default function handler (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  return apiProxy (req, res, (result: any) => {
    if (result instanceof Error) {
      throw result;
    }

    throw new Error(
      `Request '${req.url}' is not proxied! We should never reach here!`
    );
  });
}

  rewrites: () => [
    {
      source: "/api/v3/quotes",
      destination: "https://quote-garden.herokuapp.com/api/v3/quotes",
    },
  ],
*/


