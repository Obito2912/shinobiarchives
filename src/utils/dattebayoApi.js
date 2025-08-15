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

const getCharacters = (page = 1) => {
  return fetch(`${baseUrl}/characters?page=${page}`).then(checkResponse);
};

const getAkatsuki = () => {
  return fetch(`${baseUrl}/akatsuki`).then(checkResponse);
};

const getClans = () => {
  return fetch(`${baseUrl}/clans`).then(checkResponse);
};

const getKara = () => {
  return fetch(`${baseUrl}/kara`).then(checkResponse);
};

const getKekkeiGenkai = () => {
  return fetch(`${baseUrl}/kekkei-genkai`).then(checkResponse);
};

const getTailedBeasts = () => {
  return fetch(`${baseUrl}/tailed-beasts`).then(checkResponse);
};

const getTeams = () => {
  return fetch(`${baseUrl}/teams`).then(checkResponse);
};

const getVillages = () => {
  return fetch(`${baseUrl}/villages`).then(checkResponse);
};

export {
  getCharacters,
  getAkatsuki,
  getClans,
  getKara,
  getKekkeiGenkai,
  getTailedBeasts,
  getTeams,
  getVillages,
  checkResponse,
};
