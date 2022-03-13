export default function makeGetQuestions({ listQuestions }) {
  return async function getQuestions(httpRequest) {
    const headers = {
      'Content-Type': 'application/json',
    };
    try {
      const intrebari = await listQuestions({ owner: httpRequest.query.owner });
      return {
        headers,
        statusCode: 200,
        body: intrebari,
      };
    } catch (e) {
      // TODO: Error logging
      console.log(e);
      return {
        headers,
        statusCode: 400,
        body: {
          error: e.message,
        },
      };
    }
  };
}
