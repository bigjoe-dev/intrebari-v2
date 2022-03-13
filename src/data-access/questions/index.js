import { MongoClient } from 'mongodb';
import makeQuestionsDb from './questions-db';

const url = process.env.DB_URL;
const dbName = process.env.DB_NAME;
const client = new MongoClient(url, { useNewUrlParser: true });

export async function makeDb() {
  await client.connect();
  return client.db(dbName);
}

const questionsDb = makeQuestionsDb({ makeDb });
export default questionsDb;
