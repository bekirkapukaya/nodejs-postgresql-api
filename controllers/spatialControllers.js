import { Client } from 'pg';

export const getPoints = async (req, res) => {
  const client = new Client();
  await client.connect();
  const data = await client.query('Select Now()');
  await client.end();

  res.status(200).json({
    data: data,
  });
};
