import type { NextApiRequest, NextApiResponse } from 'next';
import { makeBadge } from 'badge-maker';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { owner, repo } = req.query;

  res.setHeader('Content-Type', 'image/svg+xml;charset=utf-8');
  res.setHeader('Cache-Control', 'max-age=30, s-maxage=30');
  res.setHeader('Access-Control-Allow-Origin', '*');

  if (!owner || !repo) {
    const svg = makeBadge({
      label: 'friendly',
      message: 'not found repo',
      //labelColor: 'green',
      color: 'purple',
    });

    res.status(200).send(svg);

    return
  }

  const svg = makeBadge({
    label: 'friendly',
    message: 'A+',
    //labelColor: 'green',
    color: 'blue',
  });

  res.status(200).send(svg);
}
