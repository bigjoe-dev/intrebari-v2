export default function makeGetRandomQuestion({ randomQuestion }) {
  return async function getRandomQuestion() {
    const headers = {
      'Content-Type': 'application/json',
    };
    try {
      const intrebare = await randomQuestion();
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
