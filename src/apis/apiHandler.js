export default async (restCall, errorPayload) => {
  let response;
  try {
    response = await restCall;
  } catch (e) {
    response = null;
  }

  const success = response && response.status >= 200 && response.status < 300;
  return success ? response : { type: 'ERROR', data: errorPayload };
};
