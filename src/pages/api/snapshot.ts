import type { NextApiRequest, NextApiResponse } from 'next'

const data = [
  {
    id: 1,
    data: {
      name: 'Jay',
      description: 'Description',
      message: 'Message',
      photoUrl: 'photoUrl'
    }
  }
]

export type Data = typeof data

export default (req: NextApiRequest, res: NextApiResponse<Data>) => {
  res.status(200).json(data)
}
