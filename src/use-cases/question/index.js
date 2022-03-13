import makeAddQuestion from './add-question';
import makeListQuestions from './list-questions';
import makeRandomQuestion from './random-question';
import questionsDb from '../../data-access/questions';

const addQuestion = makeAddQuestion({ questionsDb });
const listQuestions = makeListQuestions({ questionsDb });
const randomQuestion = makeRandomQuestion({ questionsDb });

const questionService = Object.freeze({
  addQuestion,
  listQuestions,
  randomQuestion,
});

export default questionService;
export { addQuestion, listQuestions, randomQuestion };
