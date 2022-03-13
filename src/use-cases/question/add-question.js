import makeQuestion from '../../entities/question';

export default function makeAddQuestion({ questionsDb }) {
  return async function addQuestion(questionInfo) {
    const question = makeQuestion(questionInfo);
    const exists = await questionsDb.findByHash({ hash: question.getHash() });
    if (exists) {
      return exists;
    }

    return questionsDb.insert({
      creator: question.getCreator(),
      createdOn: question.getCreatedOn(),
      modifiedOn: question.getModifiedOn(),
      id: question.getId(),
      answered: question.getAnswered(),
      body: question.getBody(),
      hash: question.getHash(),
    });
  };
}
