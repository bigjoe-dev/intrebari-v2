export default function makeGetRandomQuestions({ randomQuestions }) {
  return async function getRandomQuestions() {
    const headers = {
      'Content-Type': 'application/json',
    };
    try {
      const intrebare = await randomQuestions();
      return {
        headers,
        statusCode: 200,
        body: intrebare,
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
