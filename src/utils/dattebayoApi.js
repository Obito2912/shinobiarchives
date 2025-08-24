import { BASE_URL } from "./config";

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
  return fetch(`${BASE_URL}/characters?page=${page}`).then(checkResponse);
};

const getAkatsuki = () => {
  return fetch(`${BASE_URL}/akatsuki`).then(checkResponse);
};

const getClans = () => {
  return fetch(`${BASE_URL}/clans`).then(checkResponse);
};

const getKara = () => {
  return fetch(`${BASE_URL}/kara`).then(checkResponse);
};

const getKekkeiGenkai = () => {
  return fetch(`${BASE_URL}/kekkei-genkai`).then(checkResponse);
};

const getTailedBeasts = () => {
  return fetch(`${BASE_URL}/tailed-beasts`).then(checkResponse);
};

const getTeams = () => {
  return fetch(`${BASE_URL}/teams`).then(checkResponse);
};

const getVillages = () => {
  return fetch(`${BASE_URL}/villages`).then(checkResponse);
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
