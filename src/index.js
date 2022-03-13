import express from 'express';
import dotenv from 'dotenv';
import {
  getQuestions,
  postQuestion,
  getRandomQuestion,
  notFound,
} from './controllers/questions';
import makeCallback from './express-callback';

dotenv.config();

const apiRoot = process.env.API_ROOT;
const app = express();
app.use(express.json());

app.use((_, res, next) => {
  res.set({ Tk: '!' });
  next();
});

app.get(`/${apiRoot}/questions`, makeCallback(getQuestions));
app.get(`/${apiRoot}/questions/random`, makeCallback(getRandomQuestion));
app.post(`/${apiRoot}/questions`, makeCallback(postQuestion));
app.use(makeCallback(notFound));

app.listen(3000, () => {

});

export default app;
