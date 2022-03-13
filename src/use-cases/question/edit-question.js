import makeQuestion from '../../entities/question';

export default function makeEditQuestion({ questionsDb }) {
  return async function editQuestions({ id, ...changes } = {}) {
    if (!id) {
      throw new Error('You must supply an id');
    }
    if (!changes.body) {
      throw new Error('You must supply a question');
    }
    const existing = await questionsDb.findById({ id });

    if (!existing) {
      throw new RangeError('Question not found');
    }

    const question = makeQuestion({ ...existing, ...changes, modifiedOn: Date.now() });
    if (question.getHash() === existing.hash) {
      return existing;
    }
    const updated = await questionsDb.update({
      id: question.getId(),
      answered: question.getAnswered(),
      modifiedOn: question.getModifiedOn(),
      body: question.getBody(),
      hash: question.getHash(),
    });
    return { ...existing, ...updated };
  };
}
