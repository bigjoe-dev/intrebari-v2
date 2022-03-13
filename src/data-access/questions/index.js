import { MongoClient } from 'mongodb';
import makeQuestionsDb from './questions-db';

const { dbName, url } = process.env;
const client = new MongoClient(url, { useNewUrlParser: true });

export async function makeDb() {
  await client.connect();
  return client.db(dbName);
}

const questionsDb = makeQuestionsDb({ makeDb });
export default questionsDb;
