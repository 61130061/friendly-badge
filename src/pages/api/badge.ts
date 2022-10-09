import type { NextApiRequest, NextApiResponse } from 'next';
import { makeBadge } from 'badge-maker';

export default (req: NextApiRequest, res: NextApiResponse) => {
  const svg = makeBadge({
    label: 'friendly',
    message: 'A+',
    //labelColor: 'green',
    color: 'blue',
  });

  res.setHeader('Content-Type', 'image/svg+xml;charset=utf-8');
  res.setHeader('Cache-Control', 'max-age=30, s-maxage=30');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.status(200).send(svg);
}