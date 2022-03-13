export default function makeRandomQuestion({ questionsDb }) {
  return async function randomQuestion({ answered } = {}) {
    function randomIntFromInterval(min, max) { // min and max included
      return Math.floor(Math.random() * (max - min + 1) + min);
    }
    if (answered === null) {
      throw new Error('You must supply answered or not.');
    }
    const questions = await questionsDb.findAll({ answered });
    const question = {
      question: questions[randomIntFromInterval(0, questions.length - 1)],
    };
    return question;
  };
}
