export default function makeListQuestions({ questionsDb }) {
  return async function listQuestions({ answered } = {}) {
    if (answered === null) {
      throw new Error('You must supply answered or not.');
    }
    const questions = await questionsDb.findAll({ answered });

    return questions;
  };
}
