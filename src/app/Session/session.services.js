import {post} from '../Utils/http.js';

export const sessionServices = {
  login: (body, accessToken) => post('/api/user/login', body, accessToken),
  register: body => post('/api/user/medic-signup', body),
};
