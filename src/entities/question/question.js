export default function buildMakeQuestion({ Id, md5 }) {
  function makeHash(creator, id, body) {
    return md5(creator + id + body);
  }
  return function makeQuestion({
    creator,
    createdOn = Date.now(),
    modifiedOn = Date.now(),
    id = Id.makeId(),
    body,
  } = {}) {
    if (!Id.isValidId(id)) {
      throw new Error('Question must have a valid id.');
    }

    return Object.freeze({
      getCreator: () => creator,
      getCreatedOn: () => createdOn,
      getHash: () => makeHash(creator, id, body),
      getId: () => id,
      getModifiedOn: () => modifiedOn,
      getBody: () => body,
    });
  };
}
