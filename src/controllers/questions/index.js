import {
  listQuestions,
  addQuestion,
  randomQuestion,
  editQuestion,
} from '../../use-cases/question';
import makeGetQuestions from './get-questions';
import makePostQuestion from './post-question';
import makePatchQuestion from './patch-question';
import makeGetRandomQuestion from './get-random-question';
import notFound from './not-found';

const getQuestions = makeGetQuestions({
  listQuestions,
});

const postQuestion = makePostQuestion({
  addQuestion,
});

const patchQuestion = makePatchQuestion({
  editQuestion,
});

const getRandomQuestion = makeGetRandomQuestion({
  randomQuestion,
});

const questionController = Object.freeze({
  getQuestions,
  postQuestion,
  patchQuestion,
  getRandomQuestion,
});

export default questionController;
export {
  getQuestions, postQuestion, patchQuestion, getRandomQuestion, notFound,
};
