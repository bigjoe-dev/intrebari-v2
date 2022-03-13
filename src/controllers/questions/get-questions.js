export default function makeGetQuestions({ listQuestions }) {
  return async function getQuestions(httpRequest) {
    const headers = {
      'Content-Type': 'application/json',
    };
    try {
      const intrebari = await listQuestions({ answered: httpRequest.query.answered });
      return {
        headers,
        statusCode: 200,
        body: intrebari,
      };
    } catch (e) {
      // TODO: Error logging
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
