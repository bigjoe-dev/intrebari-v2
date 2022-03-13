import Id from '../../entities/Id';

export default function makeQuestionsDb({ makeDb }) {
  async function findAll({ unanswered = false } = {}) {
    const db = await makeDb();
    const query = unanswered ? { answered: false } : {};
    const result = await db.collection('questions').find(query);
    return (await result.toArray()).map(({ _id: id, ...found }) => ({
      id,
      ...found,
    }));
  }

  async function insert({ id: _id = Id.makeId(), ...questionInfo }) {
    const db = await makeDb();
    const result = await db
      .collection('questions')
      .insertOne({ _id, ...questionInfo });
    return { ...result };
  }

  return Object.freeze({
    findAll,
    insert,
  });
}
