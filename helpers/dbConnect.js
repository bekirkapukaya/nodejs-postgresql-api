import { Client } from 'pg';

const dbConnect = async () => {
  const client = new Client();
  await client.connect().then(() => {
    console.log('Database connection successful...');
  });
  await client.end();
};

export default dbConnect;
