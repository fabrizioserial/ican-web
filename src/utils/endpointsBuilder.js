import { postMutation, postWithoutTokenMutation } from "./http";

/**
 * @param {*} builder Builder to add the reducers and actions (default)
 * @param {Object} endpointsInfo Object with the endpoints information 
 * @template endpointsInfo { [endpointAction]: { [endpoint]: string, [httpMethod]: string } } 
 * @example The follow example define one login action (how it will be called from screen) with the url and the http method: { login: { url: "/api/user/", method: "POST" } }
 */
 const endpointsBuilder = (builder, endpointsInfo = {}) => {
  let endpoints = {};

  // TODO complete methods
  for (const [endpointAction, endpoint] of Object.entries(endpointsInfo)) {
      switch (endpoint.method) {
          case "POST":
            endpoints = { ...endpoints, [endpointAction]: builder.mutation({ query: ({ body, accessToken }) => postMutation(endpoint.url, body, accessToken), transformResponse: (response, meta, arg) => response }) };

              break;
          case "POST_WITHOUT_TOKEN":
            endpoints = { ...endpoints, [endpointAction]: builder.mutation({ query: body => postWithoutTokenMutation(endpoint.url, body), transformResponse: (response, meta, arg) => response }) };

              break;
          case "GET":
              break;
          case "PATH":
              break;
          case "DELETE":
              break;
          default: break;
      }
  }

  return endpoints;
}

export default endpointsBuilder;