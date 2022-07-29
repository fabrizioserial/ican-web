import appInfo from '../../settings.json';

export const get = endpoint =>
  fetch(appInfo.BASE_URL + endpoint).then(res => res.json());

export const post = async (endpoint, body, accessToken) => {
  const headers = accessToken
    ? {
        Authorization: `Bearer ${accessToken}`,
        'Content-type': 'application/json',
      }
    : {'Content-type': 'application/json'};

  const res = await fetch(appInfo.BASE_URL + endpoint, {
    method: 'POST',
    body: JSON.stringify(body),
    headers,
  });

  return await res.json();
};

export const patch = (endpoint, body, headers) =>
  fetch(appInfo.BASE_URL + endpoint, {
    method: 'PATCH',
    body: JSON.stringify(body),
    headers: {
      ...headers,
      'Content-type': 'application/json',
    },
  }).then(res => res.json());
