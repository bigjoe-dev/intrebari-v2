export default function buildMakeQuestion({ Id, md5 }) {
  function makeHash(creator, id, body, answered) {
    return md5(creator + id + body + answered);
  }
  return function makeQuestion({
    creator,
    createdOn = Date.now(),
    modifiedOn = Date.now(),
    id = Id.makeId(),
    answered = false,
    body,
  } = {}) {
    if (!Id.isValidId(id)) {
      throw new Error('Question must have a valid id.');
    }

    return Object.freeze({
      getCreator: () => creator,
      getCreatedOn: () => createdOn,
      getHash: () => makeHash(creator, id, body, answered),
      getId: () => id,
      getModifiedOn: () => modifiedOn,
      getAnswered: () => answered,
      getBody: () => body,
    });
  };
}
