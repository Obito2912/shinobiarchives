const baseUrl = "https://dattebayo-api.onrender.com";

const checkResponse = (res, customErrorMessage) => {
  if (res.ok) {
    return res.json();
  }

  const baseMessage = `Error: ${res.status}`;
  const fullMessage = customErrorMessage
    ? `${customErrorMessage} (${baseMessage})`
    : baseMessage;

  return Promise.reject(fullMessage);
};

const getCharacters = () => {
  return fetch(`${baseUrl}/characters`).then(checkResponse);
};

export { getCharacters };
