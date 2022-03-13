import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import {
  getQuestions,
  postQuestion,
  patchQuestion,
  getRandomQuestion,
  notFound,
} from './controllers/questions';
import makeCallback from './express-callback';

dotenv.config();

const port = process.env.PORT || 3000;
const apiRoot = process.env.API_ROOT;
const app = express();
app.use(express.json());
app.use(cors());

app.use((_, res, next) => {
  res.set({ Tk: '!' });
  next();
});

app.get(`/${apiRoot}/questions`, makeCallback(getQuestions));
app.get(`/${apiRoot}/questions/random`, makeCallback(getRandomQuestion));
app.post(`/${apiRoot}/questions`, makeCallback(postQuestion));
app.patch(`/${apiRoot}/questions/:id`, makeCallback(patchQuestion));
app.patch(`/${apiRoot}/questions`, makeCallback(patchQuestion));
app.use(makeCallback(notFound));

app.listen(port, () => {
});

export default app;
