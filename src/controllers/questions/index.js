import {
  listQuestions,
  addQuestion,
  randomQuestion,
} from '../../use-cases/question';
import makeGetQuestions from './get-questions';
import makePostQuestion from './post-question';
import makeGetRandomQuestion from './get-random-question';
import notFound from './not-found';

const getQuestions = makeGetQuestions({
  listQuestions,
});

const postQuestion = makePostQuestion({
  addQuestion,
});

const getRandomQuestion = makeGetRandomQuestion({
  randomQuestion,
});

const questionController = Object.freeze({
  getQuestions,
  postQuestion,
  getRandomQuestion,
});

export default questionController;
export {
  getQuestions, postQuestion, getRandomQuestion, notFound,
};
