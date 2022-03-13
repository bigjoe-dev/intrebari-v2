import Id from '../../entities/Id';

export default function makeQuestionsDb({ makeDb }) {
  async function findAll({ answered = false } = {}) {
    const db = await makeDb();
    const query = answered ? { answered: true } : { answered: false };
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

  async function findByHash(question) {
    const db = await makeDb();
    const result = await db.collection('questions').find({ hash: question.hash });
    const found = await result.toArray();
    if (found.length === 0) {
      return null;
    }
    const { _id: id, ...insertedInfo } = found[0];
    return { id, ...insertedInfo };
  }

  async function update({ id: _id, ...questionInfo }) {
    const db = await makeDb();
    const result = await db
      .collection('questions')
      .updateOne({ _id }, { $set: { ...questionInfo } });
    return result.modifiedCount > 0 ? { id: _id, ...questionInfo } : null;
  }

  return Object.freeze({
    findAll,
    findByHash,
    insert,
    update,
  });
}
