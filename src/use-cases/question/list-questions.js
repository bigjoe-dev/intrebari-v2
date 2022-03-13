export default function makeListQuestions({ questionsDb }) {
  return async function listQuestions({ answered } = {}) {
    if (!answered) {
      throw new Error('You must supply answered or not answered.');
    }
    const ans = answered === 'yes';
    const questions = await questionsDb.findAll({ answered: ans });

    return questions;
  };
}
