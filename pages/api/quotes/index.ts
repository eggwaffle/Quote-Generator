//import { createProxyMiddleware, Filter, Options, RequestHandler } from 'http-proxy-middleware';

import type { NextApiRequest, NextApiResponse } from 'next'
import { apiURL } from '../../../lib/apiURL'


export const getRandomData = async () => {
  try{
    const response = await fetch(`${apiURL}/random`)
    const jsonData = await response.json()
    return jsonData
  } catch (err) {
    return {
      notFound: true,
    }
  }
}

export const getDataByAuthor = async (author: string) => {
  try{
    const response = await fetch(`${apiURL}?author=${author}`)
    const jsonData = await response.json()
    return jsonData
  } catch (err) {
    return {
      notFound: true,
    }
  }
}

export default async function handler (
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const jsonData = await getRandomData()
    try {
      res.status(200).json(jsonData)
    } catch (err) {
      res.status(500).json({ error: err})
    }
}