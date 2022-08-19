const defautlHeaders = { 'Content-type': 'application/json' };

// Variable name structure: [httpMethod][related][type]
export const postWithoutTokenMutation = (url, body) => {
    return { url, method: "POST", body, headers: defautlHeaders }
}; // It is only used in login and registration requests.
export const postMutation = (url, body, accessToken) => ({ url, method: "POST", body, headers: { ...defautlHeaders, Authorization: `Bearer ${accessToken}` } }); // This method is the default for http post.