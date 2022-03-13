export default function makePostQuestion({ addQuestion }) {
  return async function postQuestion(httpRequest) {
    try {
      const { ...questionInfo } = httpRequest.body;
      const added = await addQuestion({
        ...questionInfo,
      });
      return {
        headers: {
          'Content-Type': 'application/json',
          'Last-Modified': new Date(added.modifiedOn).toUTCString(),
        },
        statusCode: 201,
        body: { added },
      };
    } catch (e) {
      return {
        headers: {
          'Content-Type': 'application/json',
        },
        statusCode: 400,
        body: {
          error: e.message,
        },
      };
    }
  };
}
